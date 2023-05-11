import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-module-course',
  templateUrl: './create-module-course.component.html',
  styleUrls: ['./create-module-course.component.css']
})
export class CreateModuleCourseComponent {
  formCreateModuleCourse: FormGroup;
  constructor(private fb:FormBuilder){
    this.formCreateModuleCourse = this.fb.group({
      valueNameModule: [null,Validators.required]
    });
  }
}
