import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automatic-change-detection-testing-example',
  templateUrl: './automatic-change-detection-testing-example.component.html',
  styleUrls: ['./automatic-change-detection-testing-example.component.css']
})
export class AutomaticChangeDetectionTestingExampleComponent implements OnInit {

  username:string;

  constructor() { }

  ngOnInit() {
    this.username='raveendra'
  }

}
