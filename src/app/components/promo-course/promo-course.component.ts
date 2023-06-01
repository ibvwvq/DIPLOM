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

  lc_user:any;
  current_course:any;
  loader:boolean = false;
  current_modules:any[] = [];

  getCourse(id:any){
    this.loader = true;
      this.dataService.getCourse(id)
        .pipe(first())
        .subscribe(
          data => {
                console.log(data);
                this.current_course = data[0];
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



  joinCourse(){
    if(!this.joinOk){
      const idCourse = Number(this.route.snapshot.paramMap.get('idCourse'));
      this.lc_user = localStorage.getItem("user");
      const idUser = JSON.parse(this.lc_user).idUser;
      this.dataService.joinCourse(idUser, idCourse)
        .pipe(first())
        .subscribe(
          data => {
            this.showSuccessAlert();
            window.location.reload();
          },
          error => {
            console.log(error);
          });
    }
  }
  p:any;

  showSuccessAlert(): void {
    this.alerts
      .open('    ',{
        label: 'Вы записаны на курс!',
        status: TuiNotification.Success,
        autoClose: false,
      })
      .subscribe();
  }

  showErrorAlert(): void {
    this.alerts
      .open('    ',{
        label: 'Вы записаны на курс!',
        status: TuiNotification.Error,
        autoClose: false,
      })
      .subscribe();
  }
}

