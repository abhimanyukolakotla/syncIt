import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
    url = "/api/textRecognition";
    
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

    getImage() {
        return this.http.get('api/imageRecognition')
                    .map(this.extractData)
                    .catch(this.handleErrorPromise)
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
