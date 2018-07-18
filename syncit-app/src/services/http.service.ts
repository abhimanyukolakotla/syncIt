import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { dataJson, dataResponse, IMAGE_TYPE, medicationConditionResponse, vitalsResponse } from '../utils/constants';

@Injectable()
export class HttpService {
    //USE BELOW FOR LOCAL TESTING
    //baseUrl = "/api";
    // USE BELOW FOR APP DEPLOYMENT
    baseUrl = "https://syncit-backend-prod.mybluemix.net/backend";
    url     = "/textRecognition";
    
    constructor(private http: Http) {}

    sendImage(imageData) {
        console.log('sending', imageData);
       
        let formData = new FormData();
        formData.append('imageData', imageData);
        
        var headers = new Headers();
        //headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'multipart/form-data');
        
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, formData, options)
                        .map(this.extractData)
                        .catch(this.handleErrorPromise)
    }

    getMedicalConditions() {
        return new Promise((resolve, reject) => {
            resolve(medicationConditionResponse);
        });
    }

    getVitals() {
        return new Promise((resolve, reject) => {
            resolve(vitalsResponse);
        });        
    }

    sendImageForRecognition(imageData, type) {
        switch(type) {
            
            case IMAGE_TYPE.IMAGE_FOOD:
                return this.performImageRecognition();
            case IMAGE_TYPE.IMAGE_LABEL:
            default:
                return this.performTextRecognition();
            
          
                
        }
    }
    performImageRecognition() {
        return this.http.get(this.baseUrl + '/imageRecognition')
                    .map(this.extractData)
                    .catch(this.handleErrorPromise)
    }

    performTextRecognition() {
        return this.http.get(this.baseUrl + '/textRecognition')
        .map(this.extractData)
        .catch(this.handleErrorPromise)
    }

    getData(name, from, to) {
        return new Promise((resolve, reject) => {
            resolve(
                dataResponse
              );
            });
    }
    
    private convertToMillisecs(date) {
        return new Date(date).valueOf();
    }
    private extractData(res: Response) {
        let body = res.json();
            return body || {};
    }
    
    private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }	
}
