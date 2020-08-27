import { TestBed, inject } from '@angular/core/testing';

import { ExampleService } from './example.service';

// Example with Test Bed

describe('ExampleService (with Test Bed)', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[ExampleService]
  }));

  it('should be created', inject([ExampleService],(service:ExampleService) => {
    expect(service).toBeTruthy();
  }));

  it('getUsername should return Raveendra Uppala',inject([ExampleService],(service:ExampleService)=>{
    expect(service.getUserName()).toBe('Raveendra Uppala')
  })

  )

});


// Example without Test Bed

describe('Example Service (No Test Bed)',()=>{
  let service:ExampleService;
  beforeEach(()=>{
    service =new ExampleService();
  })
  it('getUsername should return Raveendra Uppala',()=>{
    expect(service.getUserName()).toBe('Raveendra Uppala');
  })

  it('getUsername_withPromise should return Raveendra Uppala', (done:DoneFn)=>{
    service.getUserName_usingPromise().then(response=>{
      expect(response).toBe('Raveendra Uppala')
      done();
    })
  })

  it('getUsername_withObservabale should return',(done:DoneFn)=>{
    service.getObservable_withObservable().subscribe(response=>{
      expect(response).toBe('Raveendra Uppala')
      done();
    })
  })
})
