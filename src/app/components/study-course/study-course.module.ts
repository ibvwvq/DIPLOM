import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyCourseRoutingModule } from './study-course-routing.module';
import { StudyCourseComponent } from './study-course.component';


@NgModule({
  declarations: [
    StudyCourseComponent
  ],
  imports: [
    CommonModule,
    StudyCourseRoutingModule
  ]
})
export class StudyCourseModule { }
