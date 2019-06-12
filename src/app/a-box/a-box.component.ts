import { Component, OnInit, Input } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-a-box',
  templateUrl: './a-box.component.html',
  styleUrls: ['./a-box.component.css', '../app.component.css']
})
export class ABoxComponent implements OnInit {

  @Input()
  count: number = 0;

  cCount: number = 0;

  assignCount(aCount: number) {
    this.count = aCount;
  }
  
  inc() {
    this.incCount(this.countService.incCallback);
  }

  incCount(getIncrementedCount: Function) {
    let incrementedCount = getIncrementedCount(this.cCount);
    this.cCount = incrementedCount;
  }

  constructor(private countService: CountService) { }

  ngOnInit() {
  }

}
