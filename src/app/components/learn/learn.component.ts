import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {first} from "rxjs";

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit{
  constructor(
    private dataService:ApiService) {}

  lc_user:any;

  ngOnInit(){
    this.getCourses();
  }

  user_courses:any[]=[];
  p:any;
  open = false;
  loader:boolean = false;
  getCourses(){
    this.loader = true;
    this.lc_user = localStorage.getItem("user");
    const idUser = JSON.parse(this.lc_user).idUser;

    this.dataService.outputCoursesForStud(idUser)
      .pipe(first())
      .subscribe(
        data =>{
          console.log(data);
          this.user_courses = data;
          this.loader = false;
        },
        error => {
          console.log(error);
          this.loader = false;

        }
      )
  }
}
