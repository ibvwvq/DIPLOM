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

    this.current_courses = localStorage.getItem('courses');
    this.CURRENT_COURSES = JSON.parse(this.current_courses);
  }

  current_courses: any;
  CURRENT_COURSES: any[] = [];

}
