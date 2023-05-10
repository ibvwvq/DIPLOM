import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  formCreateCourse:FormGroup;

  constructor(private fb:FormBuilder,private dataService: ApiService, private router: Router) {
    this.formCreateCourse = this.fb.group({
      valueName: [null],
      valueDescription:[null]
    })
  }


  createCourse(form:FormGroup){
    this.dataService.userCreateCourse(form.value.valueName,form.value.valueDescription,this.dataService.CURRENT_ROLE)
      .pipe(first())
      .subscribe(
        data => {
          console.log("Its OK")
        },
        error => {
          console.log("Its not OK")
        });
  }




}
