import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { InfoCourseService } from 'src/app/services/info-course/info-course.service';

@Component({
  selector: 'app-create-module-course',
  templateUrl: './create-module-course.component.html',
  styleUrls: ['./create-module-course.component.css']
})
export class CreateModuleCourseComponent implements OnInit {
  formCreateModuleCourse: FormGroup;
  constructor(private fb: FormBuilder, private dataService: ApiService, private infoCoursesService: InfoCourseService) {
    this.formCreateModuleCourse = this.fb.group({
      valueNameModule: [null, Validators.required]
    });
  }
  idCourse: any;


  isCreatedSuccess = false;
  isCreatedError = false;
  isSubmit = false;

  ngOnInit(): void {
    this.idCourse = this.infoCoursesService.current_course.idCourse;
  }



  createModule(form: FormGroup) {
    this.isSubmit = true;
    if (this.formCreateModuleCourse.controls.valueNameModule.valid) {
      this.dataService.createModule(form.value.valueNameModule, this.idCourse)
        .pipe(first())
        .subscribe(
          data => {
            this.isCreatedSuccess = true;
            console.log(data);
          },
          error => {
            this.isCreatedError = true;
            console.log(error);
          });
    }
  }
  get f() { return this.formCreateModuleCourse.controls }
}

