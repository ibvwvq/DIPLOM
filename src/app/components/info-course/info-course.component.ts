import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoCourseService } from 'src/app/services/info-course/info-course.service';

@Component({
  selector: 'app-info-course',
  templateUrl: './info-course.component.html',
  styleUrls: ['./info-course.component.css']
})
export class InfoCourseComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private infoCourseService: InfoCourseService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getItem(id);
  }

  course: any;
  courses: any;
  COURSES: any;

  getItem(id: any) {
    this.courses = localStorage.getItem('courses');
    this.COURSES = JSON.parse(this.courses);

    for (var i = 0; i < this.COURSES.length; i++) {
      if (this.COURSES[i].idCourse == id) {
        this.infoCourseService.current_course = this.COURSES[i];
        this.course = this.infoCourseService.current_course;
      }
    }
  }
}
