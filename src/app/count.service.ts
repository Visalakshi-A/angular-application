import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  
  private aCount: number = 0;
  private bCount: number = 0;
  private cCount: number = 0;
  aCountSubject: Subject<number> = new Subject<number>();
  bCountSubject: Subject<number> = new Subject<number>();
  cCountSubject: Subject<number> = new Subject<number>();

  getACount(): Observable<number> {
    return of(this.aCount);
  }

  getBCount(): Observable<number> {
    return of(this.bCount);
  }

  getCCount(): Observable<number> {
    return of(this.cCount);
  }

  incA() {
    this.aCount++;
    this.aCountSubject.next(this.aCount);
  }

  incB() {
    this.bCount++;
    this.bCountSubject.next(this.bCount);
  }

  incC() {
    this.cCount++;
    this.cCountSubject.next(this.cCount);
  }

  constructor() { }
}
