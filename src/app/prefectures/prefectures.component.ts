import { Component, OnInit } from '@angular/core';
import { Prefecture } from '../services/prefecture/prefecture';
import { PrefectureService } from '../services/prefecture/prefecture.service';

@Component({
  selector: 'app-prefectures',
  templateUrl: './prefectures.component.html',
  styleUrls: ['./prefectures.component.css'],
})
export class PrefecturesComponent implements OnInit {
  public prefectures: Prefecture[] = [];

  constructor(private prefectureService: PrefectureService) {}

  ngOnInit(): void {
    this.getPrefectures();
  }

  getPrefectures() {
    this.prefectureService.getPrefectures().subscribe((prefectures) => {
      // todo: length 0 の場合エラー表示
      this.prefectures = prefectures.result;
    });
  }
}
