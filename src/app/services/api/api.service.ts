import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {LoginService} from "../login/login.service";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  current_user:any;
  redirectUrl: string | undefined;
  baseUrl: string = "https://education.mk-cloud.ru/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient,public loginService:LoginService) { }
  user_name:any;
  public userlogin(username:any, password:any) : Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Users => {
        this.setToken(Users[0].name,Users[0]);
        this.getLoggedInName.emit(true);
        this.current_user = Users;
        return Users;
      }));
  }
  public userregistration(name:any, email:any, pwd:any) : Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd})
      .pipe(map(Users => {
        return Users;
      }));
  }



  getUsers(){
    const CURRENT:any = this.current_user;
    console.log(CURRENT);
  }
  //token
  setToken(token: string,user:any) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
  qw:any;
  CURRENT_USER:any
  getToken() {
    this.qw = localStorage.getItem('user');
    this.CURRENT_USER = JSON.parse(this.qw);
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}

