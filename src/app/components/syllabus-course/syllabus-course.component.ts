import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { SyllabusService } from 'src/app/services/syllabus/syllabus.service';

@Component({
  selector: 'app-syllabus-course',
  templateUrl: './syllabus-course.component.html',
  styleUrls: ['./syllabus-course.component.css']
})
export class SyllabusCourseComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService: ApiService,
    private syllabusService: SyllabusService) { }



  loading = true;
  ngOnInit() {
    this.loading = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.getModules(id);
  }

  dialogCreateModule = false;

  openPageCreateModule() {
    this.dialogCreateModule = true;
  }

  MODULES: any[] = [];
  noneModules: any = false;

  current_lessons:any = [];

  getModules(id: any) {
    this.dataService.getModules(id)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.syllabusService.modules = data;
          this.MODULES = this.syllabusService.modules;
          this.loading = false;
          if (this.syllabusService.modules.length == 0) {
            this.noneModules = true;
          }
        },
        error => {
          console.log(error);
        });
  }
  // getLessons(id:any){
  //   const idModule = Number(this.route.snapshot.paramMap.get('idModule'));
  //   this.dataService.getLessons(id)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.current_lessons = data;
  //         console.log(this.current_lessons);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
}
