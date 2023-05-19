import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable, catchError, first, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatedCoursesService implements OnInit {

  constructor(
    private dataService: ApiService) { }

    course_delete:any;

  ngOnInit() {
    this.getCourses();

    if (this.CURRENT_COURSES.length == 0) {
      this.isEmpty = true;
    }
  }

  CURRENT_COURSES: any[] = [];
  CURRENT_USER: any;
  isBad = false;
  isEmpty = false;

  getCourses() {
    const current_user: any = localStorage.getItem('user');
    this.CURRENT_USER = JSON.parse(current_user);
    this.dataService.getCourses(this.CURRENT_USER.idUser)
      .pipe(first())
      .subscribe(
        data => {
          this.isBad = false;
          this.CURRENT_COURSES = data;

        },
        error => {
          console.log(error);
          this.isBad = true;
        });
  }
}

