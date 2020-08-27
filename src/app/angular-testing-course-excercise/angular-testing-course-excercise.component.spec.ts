import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTestingCourseExcerciseComponent } from './angular-testing-course-excercise.component';

describe('AngularTestingCourseExcerciseComponent', () => {
  let component: AngularTestingCourseExcerciseComponent;
  let fixture: ComponentFixture<AngularTestingCourseExcerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTestingCourseExcerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTestingCourseExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display value of test ',()=>{
    // Initial data binding
    fixture.detectChanges();

    // first Assertion
    let p =fixture.nativeElement.querySelector('p')
    expect(p.innerText).toContain('hello');

    // invoke method
    component.myMethod()

    // trigger the data binding again and second assertion
    fixture.detectChanges();
    expect(p.innerText).toContain('world');

  })
});
