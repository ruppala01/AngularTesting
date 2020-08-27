import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsTestingExampleComponent } from './inputs-testing-example.component';

import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { By } from '@angular/platform-browser';

@Component({
  
  templateUrl: `<app-inputs-testing-example [make]="myCar.make" [model]="myCar.model" 
  (started)="onStarted($event)" (stopped)="onStop($event) " >
  </app-inputs-testing-example>`,
  
})
export class TestHost implements OnInit {

  myCar={
    make:"Holden",
    model:"Astra"
  }

  recentStartup:string;
  recentStop:string;

 
  
  constructor() { }

  ngOnInit() {
  }

  onStarted(car:any){
    this.recentStartup=car.make
  }
  onStop(car:any){
    this.recentStop=car.model;
  }

}

describe('InputsTestingExampleComponent', () => {
  let component: TestHost;
  let fixture: ComponentFixture<TestHost>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsTestingExampleComponent,TestHost ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should receive make and model from host',()=>{
    // initial bindings
    fixture.detectChanges();

    // get the rendered car template (Cardetails paragraph)
    let carDetaileEl=fixture.nativeElement.querySelector('.carDetails')

    // check that the make and model inputs from host are rendered
    expect(carDetaileEl.textContent).toContain(component.myCar.make)
  })

  it('should receive expected car details from child component', ()=>{
    // intial bindings
    fixture.detectChanges();

    // get start button and simulate click
    let carDetail_de= fixture.debugElement.query(By.css(".startBtn"))
    carDetail_de.triggerEventHandler('click',null);

    // assert the car emitted event and passed its make to host 
    // which then set it as recentStartup variable
    expect(component.recentStartup).toContain("Holden")
  })
});
