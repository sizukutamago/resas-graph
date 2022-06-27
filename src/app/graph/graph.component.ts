import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  private chartOptions: any = {
    chart: {
      type: 'line',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: [1980, 1990, 2000, 2010, 2020],
    },
    yAxis: {
      title: {
        text: '人口数',
      },
      categories: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000],
    },
    series: [
      {
        name: '人口推移',
        type: 'line',
        data: [
          [0, 4],
          [4, 0],
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {
    Highcharts.chart('graph', this.chartOptions);
  }
}
