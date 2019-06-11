import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-box',
  templateUrl: './a-box.component.html',
  styleUrls: ['./a-box.component.css', '../app.component.css']
})
export class ABoxComponent implements OnInit {

  private count: number = 0;
  
  inc(flag: boolean) {
    this.count++;
  }

  constructor() { }

  ngOnInit() {
  }

}
