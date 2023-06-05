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

ngOnInit(){
  this.getAnswerForTeacher();
}

  answers_checking:any[]=[];
  getAnswerForTeacher(){
      this.dataService.getAnswerForTeacher(this.idUser)
        .pipe(first())
        .subscribe(
          data=>{
            this.answers_checking = data;
            console.log(data);},
          error => {console.log(error)})
  }

  getNameStudent(){

  }
}
