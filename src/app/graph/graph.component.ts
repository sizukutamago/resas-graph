import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  private chart: Highcharts.Chart | undefined;

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
    },
    series: [
      {
        name: '東京',
        type: 'line',
        data: [60000, 30000, 30000, 10000],
      },
      {
        name: '大阪',
        type: 'line',
        data: [10000, 20000, 30000, 60000],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {
    this.chart = Highcharts.chart('graph', this.chartOptions);

    setTimeout(() => {
      this.chart?.addSeries({
        name: '奈良',
        type: 'line',
        data: [20000, 20000, 50000, 80000],
      });
    }, 1000);
  }
}
