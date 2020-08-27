import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-data-mocking-example',
  templateUrl: './data-mocking-example.component.html',
  styleUrls: ['./data-mocking-example.component.css']
})
export class DataMockingExampleComponent implements OnInit {

  user:any


  constructor( private exampleServie:ExampleService ) { }

  ngOnInit() {
    this.user=this.exampleServie.getUserName();
  }

}
