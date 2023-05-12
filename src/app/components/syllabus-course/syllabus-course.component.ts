import { Component } from '@angular/core';
import { first, map } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { InfoCourseService } from 'src/app/services/info-course/info-course.service';
import { SyllabusService } from 'src/app/services/syllabus/syllabus.service';

@Component({
  selector: 'app-syllabus-course',
  templateUrl: './syllabus-course.component.html',
  styleUrls: ['./syllabus-course.component.css']
})
export class SyllabusCourseComponent {

  constructor(
    private infoCourseService:InfoCourseService,
    private dataService:ApiService,
    private syllabusService:SyllabusService){}

  current_course:any = this.infoCourseService.current_course;


  loading = true;
  ngOnInit() {  
    this.loading = true;
    this.getModules();
  }

  dialogCreateModule = false;

  openPageCreateModule(){
    this.dialogCreateModule = true;
  }

  MODULES:any[] = [];

  current_modules:any;

  getModules(){
      this.dataService.getModules(this.current_course.idCourse)
      .pipe(first())
        .subscribe(
          data => {
            this.syllabusService.modules = data;
            this.MODULES = this.syllabusService.modules;
            this.loading = false;
          },
          error => {
            console.log(error);
          });
  }
}
