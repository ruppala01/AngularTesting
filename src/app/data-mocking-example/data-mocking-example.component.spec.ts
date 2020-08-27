import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMockingExampleComponent } from './data-mocking-example.component';
import { ExampleService } from '../example.service';
import { MockDataService } from '../mock-data.service';
import { By } from '@angular/platform-browser';

describe('DataMockingExampleComponent', () => {
  let component: DataMockingExampleComponent;
  let fixture: ComponentFixture<DataMockingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMockingExampleComponent ],
      providers:[{provide:ExampleService,useClass:MockDataService}] // example implementation for using mockdata service rather than the actual service
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMockingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have user object after that', ()=>{
    expect(component.user).toBeUndefined;
    component.ngOnInit();
    expect(component.user).toContain('Raveendra');
  })

  it('template should display username',()=>{
    let p=fixture.debugElement.query(By.css('#user'));
    var innerText=p.nativeElement.innerText;
    expect(innerText).toBe("");
    fixture.detectChanges();
    var innerText=p.nativeElement.innerText;

    expect(component.user).toContain('Raveendra');
  })
});
