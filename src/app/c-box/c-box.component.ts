import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c-box',
  templateUrl: './c-box.component.html',
  styleUrls: ['./c-box.component.css', '../app.component.css']
})
export class CBoxComponent implements OnInit {

  @Input()
  count: number = 0;
  @Output()
  incremented = new EventEmitter<number>();

  bCount: number = 0;

  assignACount(aCount: number) {
    this.incremented.emit(aCount);
  }

  inc() {
    this.bCount++;
  }

  constructor() { }

  ngOnInit() {
  }

}
