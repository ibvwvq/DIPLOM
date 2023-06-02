import { Component } from '@angular/core';
import {first} from "rxjs";
import {ApiService} from "../../services/api/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-confirmation-leave-course-deletion',
  templateUrl: './confirmation-leave-course-deletion.component.html',
  styleUrls: ['./confirmation-leave-course-deletion.component.css']
})
export class ConfirmationLeaveCourseDeletionComponent {

  constructor(
    private route:ActivatedRoute,
    private dataService:ApiService) {
  }
  idCourse:number = Number(this.route.snapshot.paramMap.get('id'));
  LS_user:any = localStorage.getItem("user");
  idUser:any = JSON.parse(this.LS_user).idUser;

  getOffCourse(idCourse:any){
    console.log(this.idUser + " " + idCourse);
    this.dataService.getOffCourse(this.idUser,idCourse)
      .pipe(first())
      .subscribe(
        data =>{
          console.log(data);
          window.location.reload();
        },
        error => {
          console.log(error);
        })
  }
}
