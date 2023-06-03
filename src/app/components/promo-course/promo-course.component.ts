import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/api/api.service";
import {first} from "rxjs";
import {TuiAlertService, TuiNotification} from "@taiga-ui/core";
@Component({
  selector: 'app-promo-course',
  templateUrl: './promo-course.component.html',
  styleUrls: ['./promo-course.component.css']
})
export class PromoCourseComponent implements OnInit{

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('idCourse'));
    this.getCourse(id);
    this.getModules(id);
    this.outputCourses();
  }

  constructor(
    private router: Router,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    private dataService:ApiService,
    private route: ActivatedRoute) {}

  courses_fav:any[]=[];
  current_course:any;
  loader:boolean = false;
  current_modules:any;
  current_lessons:any;
  current_tasks:any;
  joinOk:boolean = false;
  p:any;
  user_courses:any[]=[];
  isFavourite:boolean = false;
  idCourse = Number(this.route.snapshot.paramMap.get('idCourse'));
  lc_user:any = localStorage.getItem("user");
  idUser = JSON.parse(this.lc_user).idUser;

  getCourse(id:any){
    this.loader = true;
      this.dataService.getCourse(id)
        .pipe(first())
        .subscribe(
          data => {
                this.current_course = data[0];
                this.dataService.getFavouriteCourses(this.idUser)
                  .pipe(first())
                  .subscribe(
                    data=>{
                      console.log(data);
                      this.courses_fav = data;
                      for(let i =0;i<this.courses_fav.length;i++){
                        if(this.courses_fav[i].idCourse == this.current_course.idCourse){
                            this.isFavourite = true;
                        }
                      }
                    }, error => {console.log(error);})
                  this.loader = false;},
        error => {this.loader = false;})
  }

  getModules(idCourse: any) {
    this.dataService.getModules(idCourse)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.current_modules = data[0];
          this.getLessons(this.current_modules.idModule);
        },
        error => {
          console.log(error);
        });
  }

  getLessons(idModule: any) {
    this.dataService.getLessons(idModule)
      .pipe(first())
      .subscribe(
        data => {
          this.current_lessons = data[0];
          this.getTasks(this.current_lessons.idLesson)
          console.log(this.current_lessons);
        },
        error => {console.log(error);});
  }

  getTasks(idLesson: any) {
    this.dataService.getTasks(idLesson)
      .pipe(first())
      .subscribe(
        data => {
          this.current_tasks = data[0];
          console.log(this.current_tasks);
        },
        error => {console.log(error);});
  }

  outputCourses() {
    this.lc_user = localStorage.getItem("user");
    const idUser = JSON.parse(this.lc_user).idUser;
    const id = Number(this.route.snapshot.paramMap.get('idCourse'));

    this.dataService.outputCoursesForStud(idUser)
      .pipe(first())
      .subscribe(
        data => {
          this.user_courses = data;
          for(let i=0;i<this.user_courses.length;i++){
            if(this.user_courses[i].idCourse == id){
              this.joinOk = true;
            }
          }
        },
        error => {this.loader = false;})
  }

  joinCourse(){
    console.log(
      this.idUser,
      this.current_course.idCourse,
      this.current_modules.idModule,
      this.current_lessons.idLesson,
      this.current_tasks.idTask);
    if(!this.joinOk){
            this.dataService.addLastChanges(
              this.idUser,
              this.current_course.idCourse,
              this.current_modules.idModule,
              this.current_lessons.idLesson,
              this.current_tasks.idTask)
              .pipe(first())
              .subscribe(
                data=> {
                  console.log(data);
                  this.dataService.joinCourse(this.idUser, this.idCourse)
                    .pipe(first()).subscribe(
                      data => {console.log(data)},
                      error => {console.log(error)});
                },
                error => {console.log(error);})
    }
  }
  addCourseFavourite(idCourse:any){
    this.dataService.addFavourite(idCourse, this.idUser)
        .pipe(first())
        .subscribe(
          data=>{this.showAlertSuccess("Курс успешно добавлен в избранное")
          window.location.reload();},
          error => {this.showAlertError("Что-то пошло не так")}
        )}

  trashCourseFavourite(idCourse:any){
    this.dataService.trashFavouriteCourses( this.idUser,idCourse,)
      .pipe(first())
      .subscribe(
        data=>{this.showAlertSuccess("Курс успешно удален")
          window.location.reload();},
        error => {this.showAlertError("Что-то пошло не так")}
      )}

  showAlertSuccess(label:string):void{
    this.alerts
      .open('    ',{
        label: label,
        status: TuiNotification.Success,
        autoClose: false,
      })
      .subscribe();
  }

  showAlertError(label:string):void{
    this.alerts
      .open('    ',{
        label: label,
        status: TuiNotification.Error,
        autoClose: false,
      })
      .subscribe();
  }
  lastChanges:any;
  resumeCourse(idCourse:any){
      this.dataService.getLastChanges(this.idUser,idCourse)
        .pipe(first())
        .subscribe(
          data=>{
            this.lastChanges = data[0];
            this.urlResumeCourse();
            },
          error => {console.log(error);}
        )
  }

  urlResumeCourse(){
    console.log(this.lastChanges.idModule)
    this.router.navigate([
      'study', this.lastChanges.idCourse,
      'module',  this.lastChanges.idModule,
      'lesson',this.lastChanges.idLesson,
      'step',this.lastChanges.idTask], {
      queryParams: {
        idCourse: this.lastChanges.idCourse,
        idModule: this.lastChanges.idModule,
        idLesson: this.lastChanges.idLesson,
        step: this.lastChanges.idTask},
      fragment: 'address',
    })

  }


}

