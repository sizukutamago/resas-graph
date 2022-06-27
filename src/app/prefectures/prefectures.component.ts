import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

interface Prefecture {
  prefCode: number;
  prefName: string;
}

@Component({
  selector: 'app-prefectures',
  templateUrl: './prefectures.component.html',
  styleUrls: ['./prefectures.component.css'],
})
export class PrefecturesComponent implements OnInit {
  public prefectures: Prefecture[] = [];

  async ngOnInit() {
    const response = await fetch(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        headers: { 'X-API-KEY': environment.API_KEY },
      }
    );

    const responseData = await response.json();
    this.prefectures = responseData.result;
  }
}
