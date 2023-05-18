import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api/api.service";
import { first, isEmpty } from "rxjs";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-created-courses',
  templateUrl: './created-courses.component.html',
  styleUrls: ['./created-courses.component.css']
})
export class CreatedCoursesComponent implements OnInit {
  formSearchCourses:FormGroup;
  constructor(private dataService: ApiService,private fb:FormBuilder) { 
    this.formSearchCourses = this.fb.group({
      valueName:[null]
    })
  }
  isEmpty = false;

  ngOnInit() {

    this.current_courses = localStorage.getItem('courses');
    this.CURRENT_COURSES = JSON.parse(this.current_courses);
  }

  current_courses: any;
  CURRENT_COURSES: any[] = [];


  pageCreateCourse = false;
  pageCreatedCourses = true;
  openPageCreateCourse(){
    this.pageCreateCourse = true;
    this.pageCreatedCourses = false;
  }

  openPageCreatedCourses(){
    this.pageCreateCourse = false;
    this.pageCreatedCourses = true;

  }
}
