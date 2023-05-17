import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { InfoLessonsService } from 'src/app/services/info-lessons/info-lessons.service';


@Component({
  selector: 'app-create-lessons-module',
  templateUrl: './create-lessons-module.component.html',
  styleUrls: ['./create-lessons-module.component.css']
})
export class CreateLessonsModuleComponent  {
  formCreateLesson: FormGroup;
  constructor(private infoLessons: InfoLessonsService, private dataService: ApiService,
    private fb: FormBuilder) {
    this.formCreateLesson = this.fb.group({
      valueNameLesson: [null, Validators.required]
    })
  }


  lcCurrentModule: any;
  text: any;
  idModule: any;
  isSubmit: boolean = false;
  createLesson() {
    this.isSubmit = true;
    this.lcCurrentModule = localStorage.getItem('current_module');

    this.text = this.formCreateLesson.value.valueNameLesson;
    this.idModule = JSON.parse(this.lcCurrentModule).idModule;

    if (this.formCreateLesson.controls.valueNameLesson.valid){
      this.dataService.createLesson(this.text, this.idModule)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  }
  get f() { return this.formCreateLesson.controls }


}
