import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api/api.service";
import { Subject, debounceTime, distinctUntilChanged, first, isEmpty, map } from "rxjs";
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreatedCoursesService } from 'src/app/services/created-courses/created-courses.service';

@Component({
  selector: 'app-created-courses',
  templateUrl: './created-courses.component.html',
  styleUrls: ['./created-courses.component.css']
})
export class CreatedCoursesComponent implements OnInit {
  formSearchCourses: FormGroup;
  constructor(private dataService: ApiService, private fb: FormBuilder, private createdCoursesService: CreatedCoursesService) {
    this.formSearchCourses = this.fb.group({
      valueName: [null]
    })
  }
  isEmpty = false;
  valueSearch = '';


  current_courses: any;
  CURRENT_COURSES: any[] = [];

  p:any;

  pageCreateCourse = false;
  pageCreatedCourses = true;
  openPageCreateCourse() {
    this.pageCreateCourse = true;
    this.pageCreatedCourses = false;
  }

  openPageCreatedCourses() {
    this.pageCreateCourse = false;
    this.pageCreatedCourses = true;

  }

  ngOnInit(): void {
    this.getCourses();
    this.CURRENT_COURSES =  this.createdCoursesService.CURRENT_COURSES;

  }

  locale_storage_current_user: any;
  CURRENT_USER: any;

  isBad = false;

  getCourses() {
    this.locale_storage_current_user = localStorage.getItem('user');
    this.CURRENT_USER = JSON.parse(this.locale_storage_current_user);

    this.dataService.getCourses(this.CURRENT_USER.idUser)
      .pipe(first())
      .subscribe(
        data => {
          this.isBad = false;
          this.createdCoursesService.CURRENT_COURSES = data;
          this.CURRENT_COURSES =  this.createdCoursesService.CURRENT_COURSES;
        },
        error => {
          this.isBad = true;
        });
  }
}
