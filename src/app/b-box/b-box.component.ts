import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CountService } from '../count.service';

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
    const promise = this.countService.incPromise(this.aCount);
    promise.then(count => {
      this.aCount = +count;
      this.incremented.emit(this.aCount);
    })
  }

  constructor(private countService: CountService) { }

  ngOnInit() {
  }

}
