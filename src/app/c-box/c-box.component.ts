import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CountService } from '../count.service';

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

  async inc() {
    const promise = this.countService.incPromise(this.bCount);
    this.bCount = Number(await promise);
  }

  constructor(private countService: CountService) { }

  ngOnInit() {
  }

}
