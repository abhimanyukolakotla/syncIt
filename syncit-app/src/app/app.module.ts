import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChartPage } from '../pages/charts/chart';
import { MedicalConditionPage } from '../pages/medical-condition/medical-condition';

import { MediaCapture } from '@ionic-native/media-capture';
import { Media } from '@ionic-native/media';
import { File  as IonicFile } from '@ionic-native/file'; 
import { IonicStorageModule } from '@ionic/storage';
import { PersonalInsightsPage } from '../pages/personal-insights/personal-insights';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChartPage,
    MedicalConditionPage,
    PersonalInsightsPage
  ],
  imports: [
    BrowserModule,
	  HttpModule,
    IonicModule.forRoot(MyApp),
    ChartModule.forRoot(highcharts),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChartPage,
    MedicalConditionPage,
    PersonalInsightsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaCapture,
    Media,
    IonicFile
  ]
})
export class AppModule {}
