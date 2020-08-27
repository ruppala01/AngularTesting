import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticChangeDetectionTestingExampleComponent } from './automatic-change-detection-testing-example.component';
import { ComponentFixtureAutoDetect} from '@angular/core/testing';

describe('AutomaticChangeDetectionTestingExampleComponent', () => {
  let component: AutomaticChangeDetectionTestingExampleComponent;
  let fixture: ComponentFixture<AutomaticChangeDetectionTestingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticChangeDetectionTestingExampleComponent ],
      providers:[{provide:ComponentFixtureAutoDetect,useValue:true}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticChangeDetectionTestingExampleComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); // not needed
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display username in paragraph', () => {
    const userProfileElement:HTMLElement=fixture.nativeElement;
    const p=userProfileElement.querySelector('p');

    expect(p.innerText).toContain('raveendra');
  });
});
