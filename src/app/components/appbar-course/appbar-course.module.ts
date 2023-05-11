import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppbarCourseRoutingModule } from './appbar-course-routing.module';
import { AppbarCourseComponent } from './appbar-course.component';


@NgModule({
  declarations: [
    AppbarCourseComponent
  ],
  exports:[AppbarCourseComponent],
  imports: [
    CommonModule,
    AppbarCourseRoutingModule
  ]
})
export class AppbarCourseModule { }
