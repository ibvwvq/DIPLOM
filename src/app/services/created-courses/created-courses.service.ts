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
    this.getCourses();

    if (this.CURRENT_COURSES.length == 0) {
      this.isEmpty = true;
    }

  }

  CURRENT_COURSES: any[] = [];

  current_user: any;
  CURRENT_USER: any;

  isBad = false;

  getCourses() {
    this.current_user = localStorage.getItem('user');

    this.CURRENT_USER = JSON.parse(this.current_user);

    this.dataService.getCourses(this.CURRENT_USER.idUser)
      .pipe(first())
      .subscribe(
        data => {
          this.isBad = false;
          this.CURRENT_COURSES = data;
        },
        error => {
          this.isBad = true;
        });
  }

}

