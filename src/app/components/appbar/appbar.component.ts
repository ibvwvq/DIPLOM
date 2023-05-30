import {Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CreatedCoursesService } from 'src/app/services/created-courses/created-courses.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit{
  constructor(
    private dataService: ApiService,
    private createdCourses:CreatedCoursesService) { }
  logout() {
    this.dataService.deleteToken();
  }
  role:any = '';
  ROLE:any = '';
  isAdmin:boolean = false;
  isTeacher:boolean = false;
  isStudent:boolean = false;

  ngOnInit():void {
   this.role = localStorage.getItem('role');
   this.ROLE = JSON.parse(this.role);

   if(this.ROLE == 1){
     this.isAdmin = true;
    }

    if(this.ROLE == 2){
      this.getPageTeacher();
      this.isTeacher = true;
    }

    if(this.ROLE == 3){
      this.isStudent = true;
    }
  }

  getPageTeacher(){
    this.createdCourses.getCourses();
  }
}
