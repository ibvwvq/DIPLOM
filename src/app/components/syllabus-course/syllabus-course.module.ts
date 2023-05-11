import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusCourseRoutingModule } from './syllabus-course-routing.module';
import { SyllabusCourseComponent } from './syllabus-course.component';


@NgModule({
  declarations: [
    SyllabusCourseComponent
  ],
  imports: [
    CommonModule,
    SyllabusCourseRoutingModule
  ]
})
export class SyllabusCourseModule { }
