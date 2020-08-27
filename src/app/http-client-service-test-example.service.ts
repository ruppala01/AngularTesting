import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable } from 'rxjs'

// import * as _ from 'underscore'

@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceTestExampleService {

  endpoint="http://192.68.1.106:2222/foods-list"

  constructor(private http:HttpClient) { }

  getFoods():Observable<any>{
    return this.http.get(this.endpoint)
  }
}
