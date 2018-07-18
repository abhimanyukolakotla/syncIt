import { Component, ViewChild } from '@angular/core';
import { NavController, Loading, AlertController, Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { HttpService } from '../../services/http.service';
import { ChartPage } from '../charts/chart'; 
import { IMAGE_TYPE } from '../../utils/constants';
import { MedicalConditionPage } from '../medical-condition/medical-condition';

import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
import { Storage } from '@ionic/storage';
import { Media, MediaObject } from '@ionic-native/media';
import { File as IonicFile } from '@ionic-native/file';
import { PersonalInsightsPage } from '../personal-insights/personal-insights';

const MEDIA_FILES_KEY = 'mediaFiles';

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
  mediaFiles = []; 
  

  recording: boolean = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];
  
  constructor(private camera: Camera, 
              private loadingCtrl: LoadingController,
              private navCtrl: NavController,
              private alertCtrl: AlertController,
              private mediaCapture: MediaCapture,
              private storage: Storage, 
              private media: Media,
              private file: IonicFile,
              public platform: Platform,
              private httpService:HttpService) {
              }

              
  ionViewDidLoad() {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    })
  }

  goToOtherPage(data) {
    this.navCtrl.push(ChartPage, {'data': data, 'image': this.base64Image});
  }

  goToMedicalConditionPage() {
    this.navCtrl.push(MedicalConditionPage);
  }
  
  goToPersonalInsightsPage() {
    this.navCtrl.push(PersonalInsightsPage);
  }
  captureAudio() {
    /* this.mediaCapture.captureAudio().then(res => {
      //this.storeMediaFiles(res);
    }, (err: CaptureError) => console.error(err)); */

    
    this.presentLoading();
    
    if(this.recording)
      this.stopRecord();
    else
      this.startRecord();
   
  }

  /******* NEW *******/
  startRecord() {
    if (this.platform.is('ios')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.startRecord();
    this.recording = true;
    
    this.loader.dismiss();
  }

  stopRecord() {
    this.audio.stopRecord();
    let data = { filename: this.fileName };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
    
    this.loader.dismiss();
    //this.getAudioList();
  }

  
  storeMediaFiles(files) {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    })
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
