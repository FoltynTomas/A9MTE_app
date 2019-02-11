import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from "rxjs/Observable";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
  }

  getWeather(text):Observable<any> {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodeURI(text)+'&APPID=ef789bd215d540568cf8a0a5d6d691cd'
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
