import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreatedCoursesService } from 'src/app/services/created-courses/created-courses.service';

@Component({
  selector: 'app-appbar-course',
  templateUrl: './appbar-course.component.html',
  styleUrls: ['./appbar-course.component.css']
})
export class AppbarCourseComponent {

constructor(private router:Router,private createdCourseService:CreatedCoursesService){}
}
