import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-testing-course-excercise',
  templateUrl: './angular-testing-course-excercise.component.html',
  styleUrls: ['./angular-testing-course-excercise.component.css']
})
export class AngularTestingCourseExcerciseComponent implements OnInit {

  test:string='hello';

  constructor() { }

  ngOnInit() {
    
  }

  myMethod(){
    this.test='world'
  }


}
