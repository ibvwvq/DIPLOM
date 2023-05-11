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
  ngOnInit(): void {
    this.idCourse = this.infoCoursesService.current_course.idCourse;
  }

  createModule(form: FormGroup) {

    this.dataService.createModule(form.value.valueNameModule, this.idCourse)
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

