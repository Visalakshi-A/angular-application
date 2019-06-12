import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  incCallback(count) {
    count++;
    return count;
  }

  incPromise(count) {
    return new Promise(resolve => {
      count++;
      resolve(count);
    });
  }

  constructor() { }
}
