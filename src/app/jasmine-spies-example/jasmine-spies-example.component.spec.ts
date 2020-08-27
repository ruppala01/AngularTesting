import { async, ComponentFixture, TestBed,tick } from '@angular/core/testing';

import { JasmineSpiesExampleComponent } from './jasmine-spies-example.component';
import { By } from '@angular/platform-browser';
import { ExampleService } from '../example.service';
import {Observable, from } from 'rxjs';
import {of} from 'rxjs/internal/observable/of'
import { DebugElement } from '@angular/core';


describe('JasmineSpiesExampleComponent', () => {
  let component: JasmineSpiesExampleComponent;
  let fixture: ComponentFixture<JasmineSpiesExampleComponent>;
  let debugElements:DebugElement[];

  let spy_getOnlineFriends
  let spy_getUserDetails



  beforeEach(async(() => {
    let dummyUserDetails={
      firstName:'Raveendra',
      lastName:'Uppala',
    }

    // object set-up
    const exampleService= jasmine.createSpyObj('ExampleService',['getUserName','getObservable_withObservable'])
    // data set-up when method called
    spy_getUserDetails=exampleService.getUserName.and.returnValue(of(dummyUserDetails.firstName))
    TestBed.configureTestingModule({
      declarations: [ JasmineSpiesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasmineSpiesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show queried element',()=>{
    fixture.detectChanges();
    debugElements=fixture.debugElement.queryAll(By.css('.spi'));

    expect(debugElements[0].nativeElement.innerText).toContain('Raveendra');
    expect(spy_getUserDetails.calls.any()).toBe(true,'getUserDetails called');
  })
});
