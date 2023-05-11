import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCourseRoutingModule } from './info-course-routing.module';
import { InfoCourseComponent } from './info-course.component';


@NgModule({
  declarations: [
    InfoCourseComponent
  ],
  imports: [
    CommonModule,
    InfoCourseRoutingModule
  ]
})
export class InfoCourseModule { }
