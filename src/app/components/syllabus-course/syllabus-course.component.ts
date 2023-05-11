import { Component } from '@angular/core';
import { first, map } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { InfoCourseService } from 'src/app/services/info-course/info-course.service';

@Component({
  selector: 'app-syllabus-course',
  templateUrl: './syllabus-course.component.html',
  styleUrls: ['./syllabus-course.component.css']
})
export class SyllabusCourseComponent {

  constructor(
    private infoCourseService:InfoCourseService,
    private dataService:ApiService){}

  current_course:any = this.infoCourseService.current_course;



  ngOnInit() {  
      console.log(this.current_course.idCourse);
      this.getModules();
  }

  dialogCreateModule = false;

  openPageCreateModule(){
    this.dialogCreateModule = true;
  }

  MODULES:any[] = [];


  getModules(){
      this.dataService.getModules(this.current_course.idCourse)
      .pipe(first())
        .subscribe(
          data => {
            this.MODULES = data;
          },

          error => {
            console.log(error);
          });
  }


}
