import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { InfoLessonsService } from 'src/app/services/info-lessons/info-lessons.service';
import { SyllabusService } from 'src/app/services/syllabus/syllabus.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-syllabus-course',
  templateUrl: './syllabus-course.component.html',
  styleUrls: ['./syllabus-course.component.css']
})

export class SyllabusCourseComponent implements OnInit {
  formCreateLesson: FormGroup;

  constructor(
    private infoLessons: InfoLessonsService,
    private fb: FormBuilder,
    private infoLessonsModule: InfoLessonsService,
    private route: ActivatedRoute,
    private dataService: ApiService,
    private syllabusService: SyllabusService)
{
  this.formCreateLesson = this.fb.group({
    valueNameLesson: [null, Validators.required]
  })
}

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
            this.loading = false;
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




  lcCurrentModule: any;
  text: any;
  idModule: any;
  isSubmit: boolean = false;
  p:any;
  lesson = '';
  isNotValidLesson = true;
  createLesson(idModule:any) {
    this.isSubmit = true;
    if(this.lesson == ''){
      this.isNotValidLesson = true;
    }
    else{
      this.isNotValidLesson = false;
      this.dataService.createLesson(this.lesson, idModule)
        .pipe(first())
        .subscribe(
          data => {
            window.location.reload();
          },
          error => {
            console.log(error);
          });
    }
  }
  get f() { return this.formCreateLesson.controls }
  onKey(event: any) { // without type info
    this.lesson = event.target.value;
    console.log(this.lesson);
    if(this.lesson == ''){
      this.isNotValidLesson = true;
    }
    else{
      this.isNotValidLesson = false;

    }

  }


  deleteLesson(idLesson:any){
    this.dataService.deleteLesson(idLesson)
      .pipe(first())
      .subscribe(
        data => {
         console.log("its ok");
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }
}
