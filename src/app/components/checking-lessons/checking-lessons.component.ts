import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {first} from "rxjs";

@Component({
  selector: 'app-checking-lessons',
  templateUrl: './checking-lessons.component.html',
  styleUrls: ['./checking-lessons.component.css']
})
export class CheckingLessonsComponent implements OnInit{
    constructor(
      private dataService:ApiService) {
    }
  lc_user: any = localStorage.getItem("user");
  idUser = JSON.parse(this.lc_user).idUser;
  name_student:any[] =[];
  id_student:any;
  answers_checking:any[]=[];

  ngOnInit(){
    this.getAnswerForTeacher();
  }
  getAnswerForTeacher(){
      this.dataService.getAnswerForTeacher(this.idUser)
        .pipe(first())
        .subscribe(
          data=>{
            this.answers_checking = data;
            for(let i=0;i<this.answers_checking.length;i++){
              this.dataService.getUser(this.answers_checking[i].idStudent)
                .pipe(first())
                .subscribe(
                  data=>{this.name_student[i] = data[0].fullName;},
                  error=>{console.log(error);})
            }},
          error => {console.log(error)})
  }
}
