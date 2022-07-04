import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messageSubject = new Subject<{ prefCode: number; checked: boolean }>();

  get messageSubject$() {
    return this.messageSubject.asObservable();
  }
}
