// import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'protractor';
import { INameList } from '../config';
import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  // private configUrl: string = "https://reqres.in/api/users?page=2";
  // private configUrl: string = "https://jsonplaceholder.typicode.com/users";

  getConfig() {
    let _url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(_url);
    // console.log(this.http.get(this.configUrl));
    //  this.http.get<INameList[]>(this.configUrl);
  }

}
