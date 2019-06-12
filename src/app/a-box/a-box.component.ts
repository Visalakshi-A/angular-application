import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-a-box',
  templateUrl: './a-box.component.html',
  styleUrls: ['./a-box.component.css', '../app.component.css']
})
export class ABoxComponent implements OnInit {

  count: number;

  getCount() {
    this.countService.aCountSubject.subscribe(count => this.count = count);
  }

  inc() {
    this.countService.incC();
  }

  constructor(private countService: CountService) { }

  ngOnInit() {
    this.getCount();
  }

}
