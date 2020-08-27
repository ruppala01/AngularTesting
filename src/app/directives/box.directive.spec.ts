import { BoxDirective, DEFAULT_BD_COLOR, DEFAULT_BG_COLOR } from './box.directive';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

@Component({
  template:`

  <p id="box0"> Hi my name is Raveendra</p>
  <p id="box1" appBox> Hi my name is Raveendra</p>

  <p id="box2" appBox bd-color="brown" bg-color="lightblue" > Hi my name is Raveendra</p>
  
  <p id="box3" appBox bd-color="brown"  > Hi my name is Raveendra</p>
  
  <p id="box4" appBox bg-color="lightblue"  > Hi my name is Raveendra</p>`
})

export class BoxTestComponent{}

describe('BoxDirective', () => {

  let fixture:ComponentFixture<BoxTestComponent>
  let debugelements:DebugElement[]
 

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations:[BoxDirective,BoxTestComponent]
    })
  }))

  beforeEach(()=>{
        // Create the component
      fixture=TestBed.createComponent(BoxTestComponent);

      // Trigger initial binding
      fixture.detectChanges();

      // Select all elements using directive
      debugelements=fixture.debugElement.queryAll(By.directive(BoxDirective))
  })
  

  it('should have 4 elements contains box', ()=>{
    expect(debugelements.length).toBe(4);
  })

  it('should have box 1 element should contain default border and bg color', ()=>{
    let box=fixture.debugElement.query(By.css('#box1'))
    let borderColor=box.nativeElement.style.borderColor;
    let backgroundColor=box.nativeElement.style.backgroundColor;

    expect(borderColor).toBe(DEFAULT_BD_COLOR)
    expect(backgroundColor).toBe(DEFAULT_BG_COLOR)
  })

  it('should have box2 element should contain border color brown and bg color lightblue', ()=>{
    let box=fixture.debugElement.query(By.css('#box2'))
    let borderColor=box.nativeElement.style.borderColor;
    let backgroundColor=box.nativeElement.style.backgroundColor;

    expect(borderColor).toBe('brown')
    expect(backgroundColor).toBe('lightblue')
  })

  it('should have box3 element should contain border color brown and bg color default', ()=>{
    let box=fixture.debugElement.query(By.css('#box3'))
    let borderColor=box.nativeElement.style.borderColor;
    let backgroundColor=box.nativeElement.style.backgroundColor;

    expect(borderColor).toBe('brown')
    expect(backgroundColor).toBe(DEFAULT_BG_COLOR)
  })

  it('should have box4 element should contain border color to default and bg color lightblue', ()=>{
    let box=fixture.debugElement.query(By.css('#box4'))
    let borderColor=box.nativeElement.style.borderColor;
    let backgroundColor=box.nativeElement.style.backgroundColor;

    expect(borderColor).toBe(DEFAULT_BD_COLOR)
    expect(backgroundColor).toBe('lightblue')
  })


  /* it('should create an instance', () => {
    const directive = new BoxDirective(el);
    expect(directive).toBeTruthy();
  }); */
});
