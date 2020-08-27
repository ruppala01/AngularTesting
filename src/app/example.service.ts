import { Injectable } from '@angular/core';
import { resolve } from 'url';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  user={
    firstName:'Raveendra',
    lastName:'Uppala',
  }

  constructor() { }

  getUserName():string{
    return `${this.user.firstName} ${this.user.lastName}`
  }

  getUserName_usingPromise():Promise< string | void>{
    return new Promise<string>((resolve,)=>{
      setTimeout(()=>{
        resolve(`${this.user.firstName} ${this.user.lastName}`)
      },2000)
      
    }).catch(err=>{
     return `${err}`
    })
  }

  getObservable_withObservable():Observable<string>{
    return Observable.create(observer=>{
      setTimeout(()=>{
        observer.next(`${this.user.firstName} ${this.user.lastName}`)
        observer.complete();
      },2000)
    })
  }
}
