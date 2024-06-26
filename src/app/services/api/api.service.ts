import {Injectable, Output, EventEmitter, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {LoginService} from "../login/login.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  user:any;
  role:any;

  redirectUrl: string | undefined;
 // baseUrl: string = "http://localhost:90/Study-App/php";
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
      .pipe(map(User => {
        return User;
      }));
  }
  public userCreateCourse(nameCourse:any,descriptionCourse :any,idUser:any){
    return this.httpClient.post<any>(this.baseUrl + '/createcourse.php', { nameCourse, descriptionCourse, idUser})
      .pipe(map(Course => {
        return Course;
      }));
  }
  public getCourses(idUser:any){
    return this.httpClient.post<any>(this.baseUrl + '/OutPutCourses.php', {idUser})
      .pipe(map(Courses => {
        return Courses;
      }));
  }

  public getAllCourses(){
    return this.httpClient.post<any>(this.baseUrl + '/getAllCourses.php',{} )
      .pipe(map(Courses => {
        return Courses;
      }));
  }

  public deleteCourse(idCourse:any){
    return this.httpClient.post<any>(this.baseUrl + '/deleteCourse.php', {idCourse})
    .pipe(map(Course => {
      return Course;
    }));
  }

  public createModule(textModule:any,idCourse:any){
    return this.httpClient.post<any>(this.baseUrl + '/createModule.php', {textModule,idCourse})
    .pipe(map(Module => {
      return Module;
    }));
  }

  public getModules(idCourse:any){
    return this.httpClient.post<any>(this.baseUrl + '/getModules.php', {idCourse})
      .pipe(map(Modules => {
        return Modules;
      }));
  }

  public createLesson(text :any,idModule :any){
    return this.httpClient.post<any>(this.baseUrl + '/createLesson.php',{text,idModule})
    .pipe(map(Lesson=>{
      console.log(Lesson);
      return Lesson;
    }));
  }

  public getLessons(idModule :any){
    return this.httpClient.post<any>(this.baseUrl + '/getLessons.php', {idModule})
    .pipe(map(Lessons => {
      return Lessons;
    }));
  }

  public getLesson(idLesson:any){
    return this.httpClient.post<any>(this.baseUrl + '/getLesson.php', {idLesson})
      .pipe(map(Lesson => {
        return Lesson;
      }));
  }

  public deleteLesson(idLesson:any){
    return this.httpClient.post<any>(this.baseUrl + '/deleteLesson.php', {idLesson})
      .pipe(map(Lesson => {
        return Lesson;
      }));
  }

  public getTasks(idLesson:any){
    return this.httpClient.post<any>(this.baseUrl + '/getTasks.php', {idLesson})
      .pipe(map(Tasks => {
        return Tasks;
      }));
  }

  public deleteTask(idTask:any){
    return this.httpClient.post<any>(this.baseUrl + '/deleteTask.php', {idTask})
      .pipe(map(Task => {
        return Task;
      }));
  }

  public getCorrectAnswer(idTask:any){
    return this.httpClient.post<any>(this.baseUrl + '/getCorrectAnswer.php', {idTask})
      .pipe(map(CorrectAnswer => {
        return CorrectAnswer;
      }));
  }

  public createTask(idLesson :any, idVariantTask :any, textTask:any){
    return this.httpClient.post<any>(this.baseUrl + '/createTask.php', {idLesson,idVariantTask,textTask})
      .pipe(map(Task => {
        return Task;
      }));
  }

  public createCorrectAnswer(idTask:any,idVariantTask :any, textAnswer :any){
    return this.httpClient.post<any>(this.baseUrl + '/createAnswers.php', {idTask,idVariantTask,textAnswer})
      .pipe(map(CorrectAnswer => {
        return CorrectAnswer;
      }));
  }

  public createWrongAnswer(idAnswer :any,textAnswer:any){
    return this.httpClient.post<any>(this.baseUrl + '/createWrongAns.php', {idAnswer,textAnswer})
      .pipe(map(CorrectAnswer => {
        return CorrectAnswer;
      }));
  }

  public getWrongAnswer(idAnswer :any){
    return this.httpClient.post<any>(this.baseUrl + '/getWA.php', {idAnswer})
      .pipe(map(WrongAnswers => {
        return WrongAnswers;
      }));
  }

  public createAccount(idRole :any,fullName:any,email:any,passNewPerson:any){
    return this.httpClient.post<any>(this.baseUrl + '/addPerson.php', {idRole,fullName,email,passNewPerson})
      .pipe(map(Account => {
        return Account;
      }));
  }

  public getCourse(idCourse:any){
    return this.httpClient.post<any>(this.baseUrl + '/getCourse.php', {idCourse})
      .pipe(map(Course => {
        return Course;
      }));
  }

  public joinCourse(idUser:any,idCourse:any){
    return this.httpClient.post<any>(this.baseUrl + '/joinCourse.php', {idUser, idCourse})
      .pipe(map(Course => {
        return Course;
      }));
  }

  public outputCoursesForStud(idUser:any){
    return this.httpClient.post<any>(this.baseUrl + '/OutPutCourses.php', {idUser})
      .pipe(map(Courses => {
        return Courses;
      }));
  }

  public compileCode(json:any){
    return this.httpClient.post<any>(this.baseUrl + '/compilerFile.php', {json})
      .pipe(map(Res => {
        return Res;
      }));
  }

  public addFavourite(idCourse :any,idUser:any){
    return this.httpClient.post<any>(this.baseUrl + '/addToFavorite.php', {idCourse,idUser})
      .pipe(map(Res => {
        return Res;
      }));
  }

  public getFavouriteCourses(idUser:any){
    return this.httpClient.post<any>(this.baseUrl + '/getFavoriteCourses.php', {idUser})
      .pipe(map(Res => {
        return Res;
      }));
  }

  public trashFavouriteCourses(idUser:any,idCourse:any){
    return this.httpClient.post<any>(this.baseUrl + '/getOffFavoriteCourse.php', {idUser,idCourse})
      .pipe(map(Res => {
        return Res;
      }));
  }

  public addLastChanges(idUser :any,idCourse:any,idModule:any,idLesson :any,idTask:any){
    return this.httpClient.post<any>(this.baseUrl + '/addLastChages.php', {idUser,idCourse,idModule,idLesson,idTask})
      .pipe(map(Res => {
        return Res;
      }));
  }

  public getLastChanges(idUser :any,idCourse:any){
    return this.httpClient.post<any>(this.baseUrl + '/getLastChanges.php', {idUser,idCourse})
      .pipe(map(Res => {
        return Res;
      }));
  }


  public getOffCourse(idUser:any,idCourse:any){
    return this.httpClient.post<any>(this.baseUrl + '/getOffCourse.php', {idUser,idCourse})
      .pipe(map(Response => {
        return Response;
      }));
  }


  public addHistoryCourse(idModule:any,idLesson:any ,idTask:any,idUser:any ,idCourse:any ){
    return this.httpClient.post<any>(this.baseUrl + '/createHistory.php', {idModule,idLesson ,idTask,idUser ,idCourse})
      .pipe(map(History => {
        return History;
      }));
  }

  getTask(idTask:any){
    return this.httpClient.post<any>(this.baseUrl + '/getTask.php', {idTask})
      .pipe(map(Task => {
        return Task;
      }));
  }

  public getHistoryCourse(idUser:any){
    return this.httpClient.post<any>(this.baseUrl + '/getHistory.php', {idUser})
      .pipe(map(History => {
        return History;
      }));
  }

  public getCompletedTasks(idUser :any,idLesson:any){
    return this.httpClient.post<any>(this.baseUrl + '/getCompletedTasks.php', {idUser,idLesson})
      .pipe(map(Tasks => {
        return Tasks;
      }));
  }

  public addCompletedTask(idUser:any,idTask: any){
    return this.httpClient.post<any>(this.baseUrl + '/addHistoryCompleted.php', {idUser,idTask })
      .pipe(map(Task => {
        return Task;
      }));
  }

  public addCodeForTeacher(idTask :any,idUser :any,textAnswer :any,idCourse :any){
    return this.httpClient.post<any>(this.baseUrl + '/createAnswerByStudent.php', {idTask, idUser, textAnswer, idCourse })
      .pipe(map(Response => {
        return Response;
      }));
  }

  public getAnswerForTeacher(idUser:any){
    return this.httpClient.post<any>(this.baseUrl + '/getAnsByStForTeacher.php', {idUser})
      .pipe(map(Response => {
        return Response;
      }));
  }

  public getCodeFromAnsBySt(idAns:any){
    return this.httpClient.post<any>(this.baseUrl + '/getCodeFromAnsBySt.php', {idAns})
      .pipe(map(Response => {
        return Response;
      }));
  }

  public createAnswerByTeacher(idAnswerByStudent:any,
                               commentTeacher:any,
                               numberStatus:any,
                               idStudent:any,
                               idTask:any){
    return this.httpClient.post<any>(this.baseUrl + '/createAnswerByTeacher.php', {
      idAnswerByStudent,
      commentTeacher,
      numberStatus,
      idStudent,
      idTask})
      .pipe(map(Response => {
        return Response;
      }));
  }

  public getStatusCode(idTask:any){
    return this.httpClient.post<any>(this.baseUrl + '/getStatusTask.php', {idTask })
      .pipe(map(Response => {
        return Response;
      }));
  }

  public getCheckAnsForStudents(idTask:any){
    return this.httpClient.post<any>(this.baseUrl + '/getCheckAnsForStudents.php', {idTask })
      .pipe(map(Response => {
        return Response;
      }));
  }

  public getUser(idUser:any){
    return this.httpClient.post<any>(this.baseUrl + '/getUser.php', {idUser})
      .pipe(map(User => {
        return User;
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
    localStorage.removeItem('courses');
  }
  isLoggedIn():boolean {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

  isTeacher():boolean{
    if(this.CURRENT_ROLE == 2){
      return true;
    }
    return false;
  }

  isAdmin():boolean{
    if(this.CURRENT_ROLE == 1){
      return true;
    }
    return false;
  }

  isStudent():boolean{
    if(this.CURRENT_ROLE == 3){
      return true;
    }
    return false;
  }
}

