import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { InfoLessonsService } from 'src/app/services/info-lessons/info-lessons.service';
import { SyllabusService } from 'src/app/services/syllabus/syllabus.service';

@Component({
  selector: 'app-syllabus-course',
  templateUrl: './syllabus-course.component.html',
  styleUrls: ['./syllabus-course.component.css']
})
export class SyllabusCourseComponent implements OnInit {
  constructor(
    private infoLessonsModule: InfoLessonsService,
    private route: ActivatedRoute,
    private dataService: ApiService,
    private syllabusService: SyllabusService) { }

  loading:boolean = true;
  ngOnInit() {
    this.loading = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getModules(id);
  }
  LESSONS:any[] =[];
  dialogCreateModule = false;
  MODULES: any[] = [];
  noneModules: any= false;

  openPageCreateModule() {
    this.dialogCreateModule = true;
  }

  getModules(idCourse: any) {
    this.dataService.getModules(idCourse)
      .pipe(first())
      .subscribe(
        data => {
          this.syllabusService.modules = data;
          if (this.syllabusService.modules.length == 0) {
            this.noneModules = true;
          }
          this.MODULES = this.syllabusService.modules;
            for(let i = 0;i<this.MODULES.length;i++){
              this.dataService.getLessons(this.MODULES[i].idModule)
                .pipe(first())
                .subscribe(
                  data => {
                    this.LESSONS[i] = data;
                    this.loading = false;
                  },
                  error => {
                    console.log(error);
                  });
            }
        },
        error => {
          console.log(error);
        });
  }
}
