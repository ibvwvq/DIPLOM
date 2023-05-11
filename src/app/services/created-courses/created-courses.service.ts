import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable, catchError, first, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatedCoursesService {

  constructor(private dataService: ApiService, private http: HttpClient) { }
  isEmpty = false;

  ngOnInit() {
    this.getCoursesFromApi();

    if (this.CURRENT_COURSES.length == 0) {
      this.isEmpty = true;
    }

  }

  current_courses: any;
  CURRENT_COURSES: any[] = [];

  current_user: any;
  CURRENT_USER: any;

  isBad = false;

  getCoursesFromApi() {
    this.current_user = localStorage.getItem('user');

    this.CURRENT_USER = JSON.parse(this.current_user);

    this.current_courses = localStorage.getItem('courses');
    this.CURRENT_COURSES = JSON.parse(this.current_courses);

    this.dataService.getCourses(this.CURRENT_USER.idUser)
      .pipe(first())
      .subscribe(
        data => {
          this.isBad = false;
        },
        error => {
          this.isBad = true;
        });
  }

}

