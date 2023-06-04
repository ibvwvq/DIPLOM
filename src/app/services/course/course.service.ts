import {Inject, Injectable, OnInit} from '@angular/core';
import {first} from "rxjs";
import {ApiService} from "../api/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TuiAlertService, TuiNotification} from "@taiga-ui/core";

@Injectable({
  providedIn: 'root'
})
export class CourseService  {

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    private dataService:ApiService) {

  }
  idCourse = Number(this.route.snapshot.paramMap.get('idCourse'));
  lc_user: any = localStorage.getItem("user");
  idUser = JSON.parse(this.lc_user).idUser;
  lastChanges:any[] = [];

  showAlertSuccess(label: string): void {
    this.alerts
      .open('    ', {
        label: label,
        status: TuiNotification.Success,
        autoClose: false,
      })
      .subscribe();
  }

  showAlertError(label: string): void {
    this.alerts
      .open('    ', {
        label: label,
        status: TuiNotification.Error,
        autoClose: false,
      })
      .subscribe();
  }

  resumeCourse(idCourse: any) {
    this.dataService.getLastChanges(this.idUser, idCourse)
      .pipe(first())
      .subscribe(
        data => {
          this.lastChanges = data[0];
          this.urlResumeCourse(this.lastChanges);
        },
        error => {
          console.log(error);
        }
      )
  }

  urlResumeCourse(lastChanges:any) {
    this.router.navigate([
      'study', lastChanges.idCourse,
      'module', lastChanges.idModule,
      'lesson', lastChanges.idLesson,
      'step', lastChanges.idTask], {
      queryParams: {
        idCourse: lastChanges.idCourse,
        idModule: lastChanges.idModule,
        idLesson: lastChanges.idLesson,
        step: lastChanges.idTask
      },
      fragment: 'address',
    })
  }
}
