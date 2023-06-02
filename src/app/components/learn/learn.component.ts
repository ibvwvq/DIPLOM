import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {first} from "rxjs";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private dataService:ApiService) {}


  ngOnInit(){
    this.getCourses();
  }

  user_courses:any[]=[];
  p:any;
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
        },
        error => {
          console.log(error);
          this.loader = false;

        }
      )
  }
  pageLeaveCourse = false;
  goOverDialogLeaveCourse(){
      this.pageLeaveCourse = true;
  }

   idCourse:number = Number(this.route.snapshot.paramMap.get('id'));
   LS_user:any = localStorage.getItem("user");
   idUser:any = JSON.parse(this.LS_user).idUser;


}
