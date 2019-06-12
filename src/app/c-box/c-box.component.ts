import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-c-box',
  templateUrl: './c-box.component.html',
  styleUrls: ['./c-box.component.css', '../app.component.css']
})
export class CBoxComponent implements OnInit {

  count: number;

  getCount() {
    this.countService.cCountSubject.subscribe(count => this.count = count);
  }

  inc() {
    this.countService.incB();
  }

  constructor(private countService: CountService) { }

  ngOnInit() {
    this.getCount();
  }

}
