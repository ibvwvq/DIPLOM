import { Component } from '@angular/core';

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.css']
})
export class TeachComponent {
  pageCreateCourse = false;
  pageCreatedCourses = true;
  openPageCreateCourse(){
    this.pageCreateCourse = true;
    this.pageCreatedCourses = false;
  }

  openPageCreatedCourses(){
    this.pageCreateCourse = false;
    this.pageCreatedCourses = true;

  }
}
