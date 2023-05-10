import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api/api.service";
import { first, isEmpty } from "rxjs";

@Component({
  selector: 'app-created-courses',
  templateUrl: './created-courses.component.html',
  styleUrls: ['./created-courses.component.css']
})
export class CreatedCoursesComponent implements OnInit {

  constructor(private dataService: ApiService) { }
  isEmpty = false;

  ngOnInit() {
    this.getCoursesFromApi();


    if(this.CURRENT_COURSES.length == 0){
        this.isEmpty = true;
    }
  }

  current_courses: any;
  CURRENT_COURSES: any[] = [];

  current_user: any;
  CURRENT_USER: any;

  getCoursesFromApi() {
    this.current_courses = localStorage.getItem('courses');
    this.current_user = localStorage.getItem('user');

    this.CURRENT_USER = JSON.parse(this.current_user);
    this.CURRENT_COURSES = JSON.parse(this.current_courses);
    for(let i = 0; i < this.CURRENT_COURSES.length; i++) {
      console.log(this.CURRENT_COURSES[i]);
    }

   

    this.dataService.getCourses(this.CURRENT_USER.idUser)
      .pipe(first())
      .subscribe(
        data => {
          console.log('Its Ok')
        },
        error => {
          console.log('Its not Ok')
        });
  }

  // outPutCourses(){
  //   for(let i = 0; i < this.current_courses.length; i++) {
  //     console.log(this.current_courses[i]);
  //   }
  // }

}
