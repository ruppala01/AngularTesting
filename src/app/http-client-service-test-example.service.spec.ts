import { TestBed } from '@angular/core/testing';

import { HttpClientServiceTestExampleService } from './http-client-service-test-example.service';
import { defer } from 'rxjs/internal/observable/defer';
import { HttpErrorResponse } from '@angular/common/http';

describe('HttpClientServiceTestExampleService', () => {

   let httpClientSpy:{get:jasmine.Spy}
   let foodService:HttpClientServiceTestExampleService 

  beforeEach(() => {
    httpClientSpy=jasmine.createSpyObj('HttpClient',['get'])
    foodService= new HttpClientServiceTestExampleService(<any>httpClientSpy)
  });

  it('should be created', () => {
    const service: HttpClientServiceTestExampleService = TestBed.get(HttpClientServiceTestExampleService);
    expect(service).toBeTruthy();
  });
  it('should return known foods',()=>{
    const knownFoods=[{
      "id":0,
      "name":"apple"
    },
    {
      "id":1,
      "name":"banana"
    }]
    httpClientSpy.get.and.returnValue(asyncData(knownFoods));
    foodService.getFoods().subscribe(
      foods=>{
        expect(foods).toEqual(knownFoods,'known foods')
      },
      error=>{
        fail('there should be noerror in this spec')
      }
    )
    expect(httpClientSpy.get.calls.count()).toBe(1,'1 call made')
  })

  it('should return a error if server',()=>{
    const errResponse =new HttpErrorResponse({
      error:' demo 404 error',
      status:404,
      statusText:'demo resource not found'
    })
    httpClientSpy.get.and.returnValue(asyncError(errResponse));
    foodService.getFoods().subscribe(
      foodList=> fail('should be an error scenario'),
      error=>{
        expect(error.message).toContain('demo resource not found')
      }
    )
  })
});
/**
 * 
 * create async observable that emits once and completes
 * after a JS engine turn
 */
export function asyncData<T>(data:T){
  return defer(()=>Promise.resolve(data))
}

/**
 * create asyc observable error that errors 
 * after a JS engine turn 
 */

 export function asyncError<T>(errorObject:any){
   return defer(()=>Promise.reject(errorObject))
 }