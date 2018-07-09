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

    getData(name, from, to) {
        return new Promise((resolve, reject) => {
            resolve({
                    data: [10, 40, 15, 46, 77.7, 20.4, 34.66, 22.4, 55.1, 83.7],
                    labels: ['2018-07-01', '2018-07-02', '2018-07-03', '2018-07-04', '2018-07-05',
                            '2018-07-06', '2018-07-07', '2018-07-08', '2018-07-09', '2018-07-10'            
                    ],
                    legend: 'Carbohydrate levels'
                }
            )
        });    
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
