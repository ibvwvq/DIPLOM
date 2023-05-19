import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-create-module-course',
  templateUrl: './create-module-course.component.html',
  styleUrls: ['./create-module-course.component.css']
})
export class CreateModuleCourseComponent implements OnInit {
  formCreateModuleCourse: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private dataService: ApiService) {
    this.formCreateModuleCourse = this.fb.group({
      valueNameModule: [null, Validators.required]
    });
  }

  isCreatedSuccess = false;
  isCreatedError = false;
  isSubmit = false;

  ngOnInit(): void {
  }

  createModule(form: FormGroup) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.isSubmit = true;
    if (this.formCreateModuleCourse.controls.valueNameModule.valid) {
      this.dataService.createModule(form.value.valueNameModule, id)
        .pipe(first())
        .subscribe(
          data => {
            this.isCreatedSuccess = true;
            window.location.reload();
          },
          error => {
            this.isCreatedError = true;
            console.log(error);
          });
    }
  }
  get f() { return this.formCreateModuleCourse.controls }
}

