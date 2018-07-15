
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { transform } from 'lodash';

@Component({
  templateUrl: 'chart.html',
  providers: [HttpService]
})
export class ChartPage {
  options: any;
  barChart: any;
  output: string;

    constructor(private httpService: HttpService) {}

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
}