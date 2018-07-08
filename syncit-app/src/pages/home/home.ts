import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import Tesseract from 'tesseract.js'
import visualRecognitionV3 from 'watson-developer-cloud/visual-recognition/v3'
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpService]
})
export class HomePage {

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

  constructor(private camera: Camera, 
              public loadingCtrl: LoadingController, 
              private httpService:HttpService) {
    //Using watson to recognise the images
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
}
