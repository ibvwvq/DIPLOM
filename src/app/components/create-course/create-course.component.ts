import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  formCreateCourse = new FormGroup({
    valueName: new FormControl(null),
    valueDescription:new FormControl(null)
  })
}
