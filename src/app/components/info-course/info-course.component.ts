import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoCourseService } from 'src/app/services/info-course/info-course.service';
import { Location } from '@angular/common';
import { CreatedCoursesService } from 'src/app/services/created-courses/created-courses.service';
@Component({
  selector: 'app-info-course',
  templateUrl: './info-course.component.html',
  styleUrls: ['./info-course.component.css']
})
export class InfoCourseComponent implements OnInit {

  constructor(
    private createdCoursesService: CreatedCoursesService,
    private route: ActivatedRoute,
    private infoCourseService: InfoCourseService,
    private location:Location) { }

  ngOnInit(): void {
    this.createdCoursesService.getCourses();
    this.COURSES = this.createdCoursesService.CURRENT_COURSES;
    console.log(this.COURSES);
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.getCurrentCourse(id);

    this.qwqw = localStorage.getItem('infoCourse');
    this.current_course = JSON.parse(this.qwqw);


    this.user = localStorage.getItem('user');
    this.USER = JSON.parse(this.user);
  }

  current_course: any;

  current_teacher: any;

  user: any;
  USER: any;

  courses: any;
  qwqw:any;
  COURSES: any;

  getCurrentCourse(id: any) {
    for (var i = 0; i < this.COURSES.length; i++) {
      if (this.COURSES[i].idCourse == id) {
        this.infoCourseService.current_course = this.COURSES[i];
        localStorage.setItem('infoCourse', JSON.stringify(this.COURSES[i]));
      }
    }
  }


  backLocation(){
      this.location.back();
  }
}
