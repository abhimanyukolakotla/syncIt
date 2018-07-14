import { Component, ViewChild } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Chart } from 'chart.js';
import Tesseract from 'tesseract.js'
import visualRecognitionV3 from 'watson-developer-cloud/visual-recognition/v3'
import { HttpService } from '../../services/http.service';
import { transform } from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpService]
})
export class HomePage {

  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  base64Image: string;
  output: string;
  loader: Loading;
  visualRecognition = new visualRecognitionV3({
    // Set the endpoint
    url: 'https://gateway.watsonplatform.net/visual-recognition/api',
    version: '2018-03-19',
    iam_apikey: '9qetdH-6WQCBFB_2kiEsiPF_ToLHPkruhZuVZK6RjsGR',
    iam_url: 'https://appid-management.ng.bluemix.net/management/v4/', // Optional
  });
  options: any; 
  
  constructor(private camera: Camera, 
              public loadingCtrl: LoadingController, 
              private httpService:HttpService) {
    //Using watson to recognise the images
    /* this.options = {
        title : { text : 'simple chart' },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2],
        }]
    }; */

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

  takeManual() {
    // imageData is a base64 encoded string
    Tesseract.recognize('https://nessalla.com/wp-content/uploads/2014/11/PeachNutritionalLabel.jpg')
      .then((result) => {
        console.log(result.html);
        this.output = result.html;
      });

  }

  
  testGet() {
    this.httpService
      .getImage()
      .subscribe((response) => {
        console.log('response', response);
      });
  }

  testPost() {
    this.httpService
      .sendImage('C:\\Users\\abhim\\Downloads\\IMG_20180404_170142.jpg')
      .subscribe((response) => {
        console.log('response', response);
      });
  }

  takePicture() {
    this.presentLoading();
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.httpService
      .sendImage(this.base64Image)
      .subscribe((response) => {
        console.log('response', response);
        this.loader.dismiss();
      });
    }, (err) => {
      console.log(err);
      this.loader.dismiss();
    });
  }
    ionViewDidLoad() {
      this.httpService.getData('carbohydrates', '2018-07-01', '2018-07-11')
      .then((response) => {
        let dataArray = this.transformResponse(response);//response['results'];
        let labelArray = response['labels'];
        let legend = response['legend'];
        this.options =  {
              chart: {
                type: 'line'
              },
              title : { text :  legend},
              /* series: [{
                  type: 'area',
                  data: dataArray,
              }] */
              series: dataArray,
              
            
          };;     
      });
    }

    transformResponse(responseData) {
      return transform(responseData.results, (accumulator, value) => {
        accumulator.push({'data': value.data, 'name': value.legend});
      }, []);
      /* {
        data: [10, 40, 15, 46, 77.7, 20.4, 34.66, 22.4, 55.1, 83.7],
        labels: ['2018-07-01', '2018-07-02', '2018-07-03', '2018-07-04', '2018-07-05',
                '2018-07-06', '2018-07-07', '2018-07-08', '2018-07-09', '2018-07-10'            
        ],
        legend: 'Carbohydrate levels'
    } */

      /* [{
          name: 'Jane',
          data: [1, 0, 4]
      }, {
          name: 'John',
          data: [5, 7, 3]
      }] */
    }
    ionViewDidLoad1() {  
        this.httpService.getData('carbohydrates', '2018-07-01', '2018-07-11')
                .then((response) => {
                  let dataArray = response['data'];
                  let labelArray = response['labels'];
                  let legend = response['legend'];
                    this.barChart = new Chart(this.barCanvas.nativeElement, {  
                        type: 'line',
                        data: {
                            labels: labelArray,
                            datasets: [{
                                label: legend,
                                data: dataArray,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)'/* ,
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)' */
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)'/* ,
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)' */
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            maintainAspectRatio : true,
                            scales: {
                                yAxes: [{
                                    /* ticks: {
                                        beginAtZero:true
                                    }, */
                                    gridLines: {
                                      display:false
                                  }
                                }],
                                xAxes: [{
                                  gridLines: {
                                      display:false
                                  }
                              }],
                            }
                        }
            
                    });
          
        })
    }    
}
