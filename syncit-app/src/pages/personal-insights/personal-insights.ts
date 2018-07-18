import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { MEDICAL_CONDITION_PAGE } from '../../utils/constants';

@Component({
  templateUrl: 'personal-insights.html',
  providers: [HttpService]
})
export class PersonalInsightsPage implements OnInit {
    
    type: string;
    medicationData: any;
    vitalsData: any;

    constructor(private httpService: HttpService) {}

    ngOnInit() {
       
    }

        
    transformResponse(responseData) {
       
    }
    segmentChanged(event) {
        console.log('event', event.value);
    }
}