import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { MEDICAL_CONDITION_PAGE } from '../../utils/constants';

@Component({
  templateUrl: 'medical-condition.html',
  providers: [HttpService]
})
export class MedicalConditionPage implements OnInit {
    
    type: string;
    medicationData: any;
    vitalsData: any;

    constructor(private httpService: HttpService) {}

    ngOnInit() {
        this.type = MEDICAL_CONDITION_PAGE.DEFAULT;
        this.httpService.getMedicalConditions().then((responseData) => {
            this.medicationData = responseData;
        });

        this.httpService.getVitals().then((responseData) => {
            this.vitalsData = responseData;
        })
    }

        
    transformResponse(responseData) {
       
    }
    segmentChanged(event) {
        console.log('event', event.value);
    }
}