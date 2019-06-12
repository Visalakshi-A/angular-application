import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-b-box',
  templateUrl: './b-box.component.html',
  styleUrls: ['./b-box.component.css', '../app.component.css']
})
export class BBoxComponent implements OnInit {

  count: number;

  getCount() {
    this.countService.bCountSubject.subscribe(count => this.count = count);
  }

  inc() {
    this.countService.incA();
  }

  constructor(private countService: CountService) { }

  ngOnInit() {
    this.getCount();
  }

}
