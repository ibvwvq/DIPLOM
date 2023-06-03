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
  constructor(
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    private dataService:ApiService,
    private route: ActivatedRoute) {}
  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('idCourse'));
    this.getCourse(id);
    this.getModules(id);
    this.outputCourses();
  }

  current_course:any;
  loader:boolean = false;
  current_modules:any[] = [];

  isFavourite:boolean = false;
  getCourse(id:any){
    this.loader = true;
      this.dataService.getCourse(id)
        .pipe(first())
        .subscribe(
          data => {
                console.log(data);
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
                    },
                    error => {console.log(error);})
                  this.loader = false;
          },
        error => {
                console.log(error);
                this.loader = false;
        })
  }

  getModules(idCourse: any) {
    this.dataService.getModules(idCourse)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.current_modules = data;
        },
        error => {
          console.log(error);
        });
  }
  joinOk:boolean = false;

  user_courses:any[]=[];
  outputCourses() {
    this.lc_user = localStorage.getItem("user");
    const idUser = JSON.parse(this.lc_user).idUser;
    const id = Number(this.route.snapshot.paramMap.get('idCourse'));

    this.dataService.outputCoursesForStud(idUser)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.user_courses = data;
          for(let i=0;i<this.user_courses.length;i++){
            if(this.user_courses[i].idCourse == id){
              this.joinOk = true;
            }
          }
        },
        error => {
          console.log(error);
          this.loader = false;

        })
  }

   idCourse = Number(this.route.snapshot.paramMap.get('idCourse'));
    lc_user:any = localStorage.getItem("user");
   idUser = JSON.parse(this.lc_user).idUser;


  joinCourse(){
    if(!this.joinOk){
      this.dataService.joinCourse(this.idUser, this.idCourse)
        .pipe(first())
        .subscribe(
          data => {
            window.location.reload();
          },
          error => {
            console.log(error);
          });
    }
  }
  p:any;

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


  courses_fav:any[]=[];
}

