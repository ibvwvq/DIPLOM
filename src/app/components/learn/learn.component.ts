import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {first} from "rxjs";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {LearnService} from "../../services/learn/learn.service";
import {CourseService} from "../../services/course/course.service";

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit{
  constructor(
    private courseService:CourseService,
    private learnService:LearnService,
    private route:ActivatedRoute,
    private dataService:ApiService) {}


  ngOnInit(){
    this.getCourses();
  }
  valueSearch = '';
  pageLeaveCourse = false;

  user_courses:any[]=[];
  p:any;
  isNull = false;
  open = false;
  loader:boolean = false;

  idCourse:number = Number(this.route.snapshot.paramMap.get('id'));
  LS_user:any = localStorage.getItem("user");
  idUser:any = JSON.parse(this.LS_user).idUser;

  resumeCourse(idCourse:any){
    this.courseService.resumeCourse(idCourse);
  }

  getCourses(){
    this.loader = true;
    this.dataService.outputCoursesForStud(this.idUser)
      .pipe(first())
      .subscribe(
        data =>{
          this.user_courses = data;
          this.loader = false;
          if(this.user_courses.length == 0){this.isNull = true;}},
        error => {this.loader = false;})
  }
  goOverDialogLeaveCourse(course:any){
      this.pageLeaveCourse = true;
      this.learnService.current_delete = course;
  }


}
