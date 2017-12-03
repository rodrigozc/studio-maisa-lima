import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoadingService {
  private showValue: boolean = false;
  private subject: Subject<boolean> = new Subject<boolean>();

  show(): void {
    this.showValue = true;
    this.subject.next(true);
  }

  hide(): void {
    this.showValue = false;
    this.subject.next(false);
  }

  getState(): Observable<boolean> {
    return this.subject.asObservable();
  }

}
