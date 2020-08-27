import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-inputs-testing-example',
  templateUrl: './inputs-testing-example.component.html',
  styleUrls: ['./inputs-testing-example.component.css']
})
export class InputsTestingExampleComponent implements OnInit {

  @Input() make:string;
  @Input() model:string;

  @Output('started') started= new EventEmitter<any>();
  @Output('stopped') stopped= new EventEmitter<any>();
  isStarted:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  startUp(){
    this.isStarted=true;
    this.started.emit({make:this.make, model:this.model});
  }
  shutdown(){
    this.isStarted=false;
    this.started.emit({make:this.make, model:this.model});
  }

}
