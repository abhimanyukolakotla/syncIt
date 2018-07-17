import { Component, ViewChild } from '@angular/core';
import { NavController, Loading, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Chart } from 'chart.js';
import Tesseract from 'tesseract.js'
import visualRecognitionV3 from 'watson-developer-cloud/visual-recognition/v3'
import { HttpService } from '../../services/http.service';
import { transform } from 'lodash';
import { ChartPage } from '../charts/chart';
import { IMAGE_TYPE } from '../../utils/constants';
import { MedicalConditionPage } from '../medical-condition/medical-condition';

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
  options: any; 
  
  constructor(private camera: Camera, 
              private loadingCtrl: LoadingController,
              private navCtrl: NavController,
              private alertCtrl: AlertController, 
              private httpService:HttpService) {}

  goToOtherPage(data) {
    this.navCtrl.push(ChartPage, {'data': data, 'image': this.base64Image});
  }

  goToMedicalConditionPage() {
    this.navCtrl.push(MedicalConditionPage);
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

  takePicture(imageType) {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      /* this.httpService
      .sendImage(this.base64Image)
      .subscribe((response) => {
        console.log('response', response);
        this.loader.dismiss();
      }); */
      this.goToOtherPage(imageType);
    }, (err) => {
      console.log(err);
     
    });
  }
  
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Take picture',
      inputs: [
        {
          type: 'radio',
          label: 'Take picture of food',
          value: IMAGE_TYPE.IMAGE_FOOD,
          checked: true
        },
        {
          type: 'radio',
          label: 'Take picture of nutrition label',
          value: IMAGE_TYPE.IMAGE_LABEL
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel called');
          }
        },
        {
          text: 'OK',
          handler: data => {
            console.log('Ok called', data);
            this.takePicture(data);
          }
        }
      ]
    });
    prompt.present();
  }  
}
