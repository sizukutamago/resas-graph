import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ResasService } from '../services/resas/resas.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  private filterYears = [1980, 1990, 2000, 2010, 2020];

  private chart: Highcharts.Chart | undefined;

  private chartOptions: any = {
    chart: {
      type: 'line',
      title: '',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: this.filterYears,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
  };

  private prefectures: { prefCode: number; checked: boolean; data: [] }[] = [];

  constructor(
    private resasService: ResasService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.chart = Highcharts.chart('graph', this.chartOptions);

    this.messageService.messageSubject$.subscribe(
      (result: { prefCode: number; checked: boolean }) => {
        this.draw(result.prefCode, result.checked);
      }
    );
  }

  draw(prefCode: number, checked: boolean) {
    const includedPrefecture = this.prefectures.find(
      (prefecture) => prefecture.prefCode === prefCode
    );

    if (includedPrefecture) {
      let data: any[] = [];
      //@ts-ignore
      includedPrefecture.data[0]?.data?.forEach((result) => {
        const a = this.filterYears.includes(result.year);
        if (a) {
          data.push(result.value);
        }
      });

      this.chart?.addSeries({
        name: '',
        type: 'line',
        data,
      });
    } else {
      this.getPrefecturePopulation(prefCode);
    }
  }

  getPrefecturePopulation(prefCode: number) {
    this.resasService.getPopulation(prefCode).subscribe((response) => {
      console.log(response);
      this.prefectures.push({
        prefCode,
        checked: true,
        data: response.result.data,
      });
      // @ts-ignore
      this.draw(prefCode, true);
    });
  }
}
