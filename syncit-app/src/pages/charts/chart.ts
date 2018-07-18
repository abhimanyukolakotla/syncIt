
import { Component, ViewChild } from '@angular/core';
import { NavParams, LoadingController, Loading, ToastController, AlertController } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { transform, isUndefined } from 'lodash';

@Component({
  templateUrl: 'chart.html',
  providers: [HttpService]
})
export class ChartPage {
  options: any;
  barChart: any;
  output: string;
  data: any;
  imageData: any;
  loader: Loading;
  showAddButton: boolean = false;

  constructor(private httpService: HttpService, 
              private navParams: NavParams, 
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController
            ) {
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

  showMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      /* duration: 5000 */
      showCloseButton : true
    });
    toast.present();
  }

  showAlert(message) {
    const alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Should Add to Chart?',
      buttons: [
        {
          text: 'No',
          handler: data => {
            console.log('Cancel called, doing nothing');
          }
        },
        {
          text: 'Yes',
          handler: data => {           
            this.addToChart();
          }
        }
      ]
    });
    prompt.present();
  }  

  addToChart() {
    this.showAlert('Added to chart successfully!');
  }

  ionViewDidLoad() {
    this.data = this.navParams.get('data');
    this.imageData = this.navParams.get('image');
    this.presentLoading();

    this.httpService.sendImageForRecognition(this.imageData, this.data)
        .subscribe((response) => {
          this.loader.dismiss();
          let dataArray  = this.transformResponse(response);//response['results'];
          let labelArray = this.transformXAxisLabels(response);
          let warnText   = response.warn;
          if(!isUndefined(response.warn)) {
            this.showMessage(response.warn);
          }
        
          this.shouldShowAddButton();
         //this.showAlert(this.shouldShowAddButton());
         if(this.shouldShowAddButton()) {
            this.showPrompt();
          }

          let legend = response['legend'];
          this.options =  {
                chart: {
                  type: 'line'
                },
                xAxis: {
                  labels: {
                    formatter: function() {
                      return new Date(this.value).toDateString();
                    }
                  }
                },   
              tooltip: {
                  formatter: function() {
                    return '<div class="tooltip-container">The value for <b>' + this.series.name + '</b> on <b>' + new Date(this.x).toDateString() + '</b><br /> is <b>' + this.y + '</b></div>';
                  }
              },
              series: dataArray          
            };   
            //this.shouldShowAddButton();
        });
  }

  shouldShowAddButton() {
    let noImage = this.navParams.get('no-image')
    //this.showAddButton = (this.imageData != undefined) || (this.imageData != null);
    return !noImage;//this.showAddButton;
  }
  transformXAxisLabels(responseData) {
    return responseData.results[0].labels;
  }

  transformResponse(responseData) {
    return transform(responseData.results, (accumulator, value, index) => {
      accumulator.push({'data': value.data, 'name': value.legend});
    }, []);
  }
}