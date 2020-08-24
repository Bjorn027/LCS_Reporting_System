import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-time-series',
  templateUrl: './time-series.component.html',
  styleUrls: ['./time-series.component.css']
})
export class TimeSeriesComponent implements OnInit {

  chartOptions:{};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: '#424242',
      },
      title: {
        style: {
          color: '#c2185b',
          font: 'bold 20px "Trebuchet MS", Verdana, sans-serif'
        },
        text: 'Campus-wise Student Enrollment Data',
      },
      subtitle: {
        text: 'XCAS',
        style: {
          color: '#FFFFFF',
          font: 'bold 20px "Trebuchet MS", Verdana, sans-serif'
        },
      },
      legend: {
        backgroundColor: '#FCFFC5'
      },

      tooltip: {
        split: true,
      },
      credits:{
        enabled:false
      },
      exporting:{
        enabled:true
      },
      xAxis:{
        labels:{
          style:{
            color:'#FFF'
          }
        }
      },
      yAxis:{
        labels:{
          style:{
            color:'#FFF'
          }
        }
      },
      series: [{
        name: 'Mississauga',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
        name: 'Brampton',
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: 'Windsor',
        data: [163, 203, 276, 408, 547, 729, 628]
      }, {
        name: 'London',
        data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
        name: 'Kitchener',
        data: [2, 2, 2, 6, 13, 30, 46]
      }]
    }
    HC_exporting(Highcharts);

    setTimeout(()=> {
      window.dispatchEvent(
        new Event('resize')
      );
    },300);
  } // end ngOnInit

}
