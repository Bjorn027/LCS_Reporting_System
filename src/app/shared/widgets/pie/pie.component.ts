import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        backgroundColor: '#424242',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Campus-wise-Contribution to Target',
        style: {
          color: '#c2185b',
          font: 'bold 20px "Trebuchet MS", Verdana, sans-serif'
        },
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            color:'white'
          },
        }
      },
      exporting:{
        enabled:true
      },
      credits:{
        enabled:false
      },
      series: [{
        name: 'Campus',
        colorByPoint: true,
        data: [{
          name: 'Toronto',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Mississauga',
          y: 11.84
        }, {
          name: 'Brampton',
          y: 10.85
        }, {
          name: 'Windsor',
          y: 4.67
        }, {
          name: 'London',
          y: 4.18
        }, {
          name: 'Kitchener',
          y: 1.64
        }, {
          name: 'Barrie',
          y: 1.6
        }, {
          name: 'Cambridge',
          y: 1.2
        }, {
          name: 'Orangeville',
          y: 2.61
        }]
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
