import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-b-box',
  templateUrl: './b-box.component.html',
  styleUrls: ['./b-box.component.css', '../app.component.css']
})
export class BBoxComponent implements OnInit {

  private count: number = 0;
  @Output()
  increment = new EventEmitter<boolean>();

  inc() {
    this.count++;
  }

  incACount() {
    // this.aCount++;
    this.increment.emit(true);
  }

  constructor() { }

  ngOnInit() {
  }

}
