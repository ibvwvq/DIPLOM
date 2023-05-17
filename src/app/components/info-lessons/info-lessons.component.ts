import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { InfoCourseService } from 'src/app/services/info-course/info-course.service';
import { InfoLessonsService } from 'src/app/services/info-lessons/info-lessons.service';
import { SyllabusService } from 'src/app/services/syllabus/syllabus.service';

@Component({
  selector: 'app-info-lessons',
  templateUrl: './info-lessons.component.html',
  styleUrls: ['./info-lessons.component.css']
})
export class InfoLessonsComponent implements OnInit {
  constructor(
    private infoLessonsService: InfoLessonsService,
    private route: ActivatedRoute,
    private dataService: ApiService) { }


  ngOnInit() {
    this.getCurrentModule();
  }

  current_module = this.infoLessonsService.current_module;

  getCurrentModule() {
    const idModule = Number(this.route.snapshot.paramMap.get('idModule'));
    const idCourse = Number(this.route.snapshot.paramMap.get('id'));

    this.dataService.getModules(idCourse)
      .pipe(first())
      .subscribe(
        data => {
          for (var i = 0; i < data.length; i++) {
            if (data[i].idModule == idModule) {
              this.current_module = data[i];
              this.infoLessonsService = this.current_module;
              console.log(this.current_module);
              localStorage.setItem('current_module', JSON.stringify(this.current_module));
            }
          }
        },
        error => {
          console.log(error);
        });
  }
  open = false;

  openPageCreateLesson() {
    this.open = true;
  }
}
