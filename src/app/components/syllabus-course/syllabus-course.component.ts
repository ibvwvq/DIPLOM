import { Component } from '@angular/core';
import { InfoCourseService } from 'src/app/services/info-course/info-course.service';
import { SyllabusService } from 'src/app/services/syllabus/syllabus.service';

@Component({
  selector: 'app-syllabus-course',
  templateUrl: './syllabus-course.component.html',
  styleUrls: ['./syllabus-course.component.css']
})
export class SyllabusCourseComponent {

  constructor(private syllabysService:SyllabusService){}
  current_course = this.syllabysService.current_course;

  ngOnInit() {

  }

  dialogCreateModule = false;
  openPageCreateModule(){
    this.dialogCreateModule = true;
  }
}
