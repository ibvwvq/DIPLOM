import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { InfoLessonsService } from 'src/app/services/info-lessons/info-lessons.service';

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
    this.getLessons();
    console.log(this.current_module);
  }

  nameCurrentModule:any;
  current_module:any = this.infoLessonsService.current_module;
  current_lessons:any;
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
              console.log(this.current_module);
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

  getLessons(){
    const idModule = this.current_module;
    this.dataService.getLessons(idModule.idModule)
      .pipe(first())
      .subscribe(
        data => {
        this.current_lessons = data;
        },
        error => {
          console.log(error);
        });
  }
}
