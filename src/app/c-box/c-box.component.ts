import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c-box',
  templateUrl: './c-box.component.html',
  styleUrls: ['./c-box.component.css', '../app.component.css']
})
export class CBoxComponent implements OnInit {

  private count: number = 0;
  @Output()
  increment = new EventEmitter<boolean>();

  incACount(flag: boolean) {
    this.increment.emit(flag);
  }

  inc() {
    this.count++;
  }

  constructor() { }

  ngOnInit() {
  }

}
