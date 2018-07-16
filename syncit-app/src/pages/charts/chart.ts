
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
      let labelArray = this.transformXAxisLabels(response);
      let legend = response['legend'];
      this.options =  {
            chart: {
              type: 'line'
            },
            xAxis: {
              labels: {
                formatter: function() {
                  return new Date(this.value).toDateString();
                }
              }
            },   
          tooltip: {
              formatter: function() {
                return '<div class="tooltip-container">The value for <b>' + this.series.name + '</b> on <b>' + new Date(this.x).toDateString() + '</b><br /> is <b>' + this.y + '</b></div>';
              }
          },
           /*  xAxis: {
              categories: labelArray
            }, */
            //title : { text :  legend},
            /* series: [{
                type: 'area',
                data: dataArray,
            }] */
            
            series: dataArray          
        };     
    });
  }

  transformXAxisLabels(responseData) {
    return responseData.results[0].labels;
  }

  transformResponse(responseData) {
    return transform(responseData.results, (accumulator, value, index) => {
      accumulator.push({'data': value.data, 'name': value.legend});
    }, []);
  }
}