import {Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-lessons-module',
  templateUrl: './create-lessons-module.component.html',
  styleUrls: ['./create-lessons-module.component.css']
})
export class CreateLessonsModuleComponent{
  formCreateLesson:FormGroup;
  constructor(private fb:FormBuilder){
    this.formCreateLesson = this.fb.group({
      valueNameLesson:[null],
      valueTasksLesson:[null]
    })
  }
}
