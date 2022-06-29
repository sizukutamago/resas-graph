import { Component, OnInit } from '@angular/core';
import { Prefecture } from '../services/resas/prefecture';
import { ResasService } from '../services/resas/resas.service';

@Component({
  selector: 'app-prefectures',
  templateUrl: './prefectures.component.html',
  styleUrls: ['./prefectures.component.css'],
})
export class PrefecturesComponent implements OnInit {
  public prefectures: Prefecture[] = [];

  constructor(private resasService: ResasService) {}

  ngOnInit(): void {
    this.getPrefectures();
  }

  getPrefectures() {
    this.resasService.getPrefectures().subscribe((prefectures) => {
      // todo: length 0 の場合エラー表示
      this.prefectures = prefectures.result;
    });
  }

  onClick(prefCode: number) {
    console.log(prefCode);
  }
}
