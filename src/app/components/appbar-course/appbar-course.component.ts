import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppbarCourseService } from 'src/app/services/appbar-course/appbar-course.service';
import { CreatedCoursesService } from 'src/app/services/created-courses/created-courses.service';
import { InfoCourseService } from 'src/app/services/info-course/info-course.service';

@Component({
  selector: 'app-appbar-course',
  templateUrl: './appbar-course.component.html',
  styleUrls: ['./appbar-course.component.css']
})
export class AppbarCourseComponent implements OnInit {

  constructor(private infoCourseService: InfoCourseService,
    private router: Router,
    private appBarCourseService: AppbarCourseService) { }

  current_course: any;
  activeItemIndex: any = this.appBarCourseService.activeItemIndex;
  ngOnInit() {
    this.current_course = this.infoCourseService.current_course;
  }
}