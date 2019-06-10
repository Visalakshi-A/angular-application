import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-b-box',
  templateUrl: './b-box.component.html',
  styleUrls: ['./b-box.component.css', '../app.component.css']
})
export class BBoxComponent implements OnInit {

  @Input()
  count: number = 0;
  @Output()
  incremented = new EventEmitter<number>();

  aCount: number = 0;

  inc() {
    this.aCount++;
    this.incremented.emit(this.aCount);
  }

  constructor() { }

  ngOnInit() {
  }

}
