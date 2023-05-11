import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppbarCourseService } from 'src/app/services/appbar-course/appbar-course.service';
import { InfoCourseService } from 'src/app/services/info-course/info-course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor(private infoCourseService: InfoCourseService,
    private router: Router,
    private appBarCourseService: AppbarCourseService) { }

  current_course: any;
  activeItemIndex: any = this.appBarCourseService.activeItemIndex;
  ngOnInit() {
    this.current_course = this.infoCourseService.current_course;
  }

  pageInfoCourse = true;
  pageSyllabus = false;

  getPageInfoCourse() {
    this.pageInfoCourse = true;
    this.pageSyllabus = false;
    
  }

  getPageSyllabus(){
    this.pageSyllabus = true;
    this.pageInfoCourse = false;
  }
}
