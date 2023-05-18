import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";
import {first} from "rxjs";
import { CreatedCoursesService } from 'src/app/services/created-courses/created-courses.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  formCreateCourse:FormGroup;

  constructor(private fb:FormBuilder,private dataService: ApiService, private router: Router,private createdCourseService: CreatedCoursesService) {
    this.formCreateCourse = this.fb.group({
      valueName: [null,[Validators.required]],
      valueDescription:[null,[Validators.required]]
    })
  }

  current_user: any;
  CURRENT_USER: any;

  isCreatedSuccess = false;
  isCreatedUnSuccess = false;
  isSubmit = false;
  createCourse(form:FormGroup){
    this.current_user = localStorage.getItem('user');

    this.CURRENT_USER = JSON.parse(this.current_user);

    this.isSubmit = true;
    if(this.formCreateCourse.controls.valueName.valid && this.formCreateCourse.controls.valueDescription){
      this.dataService.userCreateCourse(form.value.valueName,form.value.valueDescription,this.CURRENT_USER.idUser)
        .pipe(first())
        .subscribe(
          data => {
            this.isCreatedSuccess = true;
            this.createdCourseService.getCourses();
          },
          error => {
            this.isCreatedUnSuccess = true;
          });
    }

  }

  get f() {return this.formCreateCourse.controls}


}
