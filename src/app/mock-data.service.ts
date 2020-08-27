import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  user={
    firstName:'Raveendra',
    lastName:'Uppala',
  }

  constructor() { }

  getUserName():string{
    return `${this.user.firstName} ${this.user.lastName}`
  }
}
