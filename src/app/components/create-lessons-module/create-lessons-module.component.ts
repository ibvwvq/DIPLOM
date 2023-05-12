import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { InfoCourseService } from 'src/app/services/info-course/info-course.service';
import { SyllabusService } from 'src/app/services/syllabus/syllabus.service';

@Component({
  selector: 'app-create-lessons-module',
  templateUrl: './create-lessons-module.component.html',
  styleUrls: ['./create-lessons-module.component.css']
})
export class CreateLessonsModuleComponent implements OnInit{
  constructor(
    private infoCoursesService: InfoCourseService,
     private route: ActivatedRoute,
     private syllabusService: SyllabusService,
     private dataService:ApiService) { }


  ngOnInit() {
    this.getCurrentModule();
  }

  modules:any;
  getCurrentModule(){
    const idModule = Number(this.route.snapshot.paramMap.get('idModule'));
    const idCourse = Number(this.route.snapshot.paramMap.get('id'));
    
    this.dataService.getModules(idCourse)
    .pipe(first())
      .subscribe(
        data => {
          for (var i = 0; i < data.length; i++) {
            if (data[i].idModule == idModule) {
              this.modules = data[i];
              console.log(this.modules);
            }
          }
        },
        error => {
          console.log(error);
        });
  }
}
