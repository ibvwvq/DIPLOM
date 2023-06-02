import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {first} from "rxjs";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {LearnService} from "../../services/learn/learn.service";

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit{
  constructor(
    private learnService:LearnService,
    private route:ActivatedRoute,
    private dataService:ApiService) {}


  ngOnInit(){
    this.getCourses();
  }

  user_courses:any[]=[];
  p:any;
  isNull = false;
  open = false;
  loader:boolean = false;
  getCourses(){
    this.loader = true;

    this.dataService.outputCoursesForStud(this.idUser)
      .pipe(first())
      .subscribe(
        data =>{
          console.log(data);
          this.user_courses = data;
          this.loader = false;
          if(this.user_courses.length == 0){
            this.isNull = true;
          }
        },
        error => {
          console.log(error);
          this.loader = false;

        }
      )
  }
  pageLeaveCourse = false;
  goOverDialogLeaveCourse(course:any){
      this.pageLeaveCourse = true;
      this.learnService.current_delete = course;
  }

   idCourse:number = Number(this.route.snapshot.paramMap.get('id'));
   LS_user:any = localStorage.getItem("user");
   idUser:any = JSON.parse(this.LS_user).idUser;


}
