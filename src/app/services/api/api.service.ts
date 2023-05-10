import {Injectable, Output, EventEmitter, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {LoginService} from "../login/login.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService implements OnInit{

  ngOnInit() {

  }

  user:any;
  role:any;

  redirectUrl: string | undefined;
  baseUrl: string = "https://education.mk-cloud.ru/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient,public loginService:LoginService) { }
  user_name:any;
  public userlogin(username:any, password:any) : Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Users => {
        this.setToken(Users[0].name);
        this.setLSUser(Users[0]);
        this.setLSRole(Users[0].idRole);

        this.getLoggedInName.emit(true);
        this.user = Users[0];
        return Users;
      }));
  }
  public userregistration(name:any, email:any, pwd:any) : Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd})
      .pipe(map(Users => {
        return Users;
      }));
  }
  public userCreateCourse(nameCourse:any,descriptionCourse :any,idUser:number){
    return this.httpClient.post<any>(this.baseUrl + '/course.php', { nameCourse, descriptionCourse, idUser})
      .pipe(map(Courses => {
        return Courses;
      }));
  }

  getUsers(){
    const CURRENT:any = this.current_user;
    console.log(CURRENT);
  }
  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  setLSUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  setLSRole(role:any){
    localStorage.setItem('role', JSON.stringify(role));
  }

  CURRENT_USER:any;
  CURRENT_ROLE:any;
  current_user:any;
  current_role:any;

  getToken() {
    this.current_role = localStorage.getItem('role');
    this.current_user= localStorage.getItem('user');
    this.CURRENT_USER = JSON.parse(this.current_user);
    this.CURRENT_ROLE = JSON.parse(this.current_role);
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  }
  isLoggedIn():boolean {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

  isTeacher():boolean{
    if(this.CURRENT_ROLE != 3){
      return true;
    }
    return false;
  }
}

