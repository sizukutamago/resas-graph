import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Prefecture } from './prefecture';
import { environment } from '../../../environments/environment';

const API_URL = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
const httpOptions = {
  headers: new HttpHeaders({ 'X-API-KEY': environment.API_KEY }),
};

@Injectable({
  providedIn: 'root',
})
export class PrefectureService {
  constructor(private http: HttpClient) {}

  getPrefectures(): Observable<{ result: Prefecture[] }> {
    return this.http.get<{ result: Prefecture[] }>(API_URL, httpOptions).pipe(
      catchError((e) => {
        console.error({ e });
        return of({ result: [] });
      })
    );
  }
}
