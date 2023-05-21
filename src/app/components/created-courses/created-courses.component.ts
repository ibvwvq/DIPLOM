import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { ApiService } from "../../services/api/api.service";
import { Subject, debounceTime, distinctUntilChanged, first, isEmpty, map } from "rxjs";
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreatedCoursesService } from 'src/app/services/created-courses/created-courses.service';
import { TUI_ARROW } from '@taiga-ui/kit';
import { TuiDialogService, TuiHostedDropdownComponent } from '@taiga-ui/core';
import { ConfirmationCourseDeletionComponent } from '../confirmation-course-deletion/confirmation-course-deletion.component';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-created-courses',
  templateUrl: './created-courses.component.html',
  styleUrls: ['./created-courses.component.less']
})
export class CreatedCoursesComponent implements OnInit {
  formSearchCourses: FormGroup;
  constructor(
    private dataService: ApiService, private fb: FormBuilder, private createdCoursesService: CreatedCoursesService) {
    this.formSearchCourses = this.fb.group({
      valueName: [null]
    })
  }
  isEmpty = false;
  valueSearch = '';


  current_courses: any;
  CURRENT_COURSES: any[] = [];

  p:any;

  pageCreateCourse = false;
  pageCreatedCourses = true;
  openPageCreateCourse() {
    this.pageCreateCourse = true;
    this.pageCreatedCourses = false;
  }



  ngOnInit(): void {
    this.getCourses();
    this.CURRENT_COURSES =  this.createdCoursesService.CURRENT_COURSES;

  }


  locale_storage_current_user: any;
  CURRENT_USER: any;

  isBad = false;

  loaderGetCourses:boolean = true;

  getCourses() {
    this.loaderGetCourses = true;
    this.locale_storage_current_user = localStorage.getItem('user');
    this.CURRENT_USER = JSON.parse(this.locale_storage_current_user);

    this.dataService.getCourses(this.CURRENT_USER.idUser)
      .pipe(first())
      .subscribe(
        data => {
          this.isBad = false;
          this.loaderGetCourses = false;
          this.createdCoursesService.CURRENT_COURSES = data;
          this.CURRENT_COURSES =  this.createdCoursesService.CURRENT_COURSES;
          if(this.CURRENT_COURSES.length === 0){
            this.isEmpty = true;
          }
        },
        error => {
          this.isBad = true;
        });
  }



    open = false;

    getSettingsBtn(): void {
        this.open = false;
    }

    pageConfirmationCourseDelete:boolean = false;

    openPageConfirmationCourseDelete(idCourse:any){
      this.pageConfirmationCourseDelete = true;
      for(let i=0; i<this.CURRENT_COURSES.length;i++){
        if(this.CURRENT_COURSES[i].idCourse == idCourse){
          this.createdCoursesService.course_delete = this.CURRENT_COURSES[i];
        }
      }
    }
}
