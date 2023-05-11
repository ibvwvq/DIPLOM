import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import {TuiTabsModule} from '@taiga-ui/kit';
import { InfoCourseModule } from '../info-course/info-course.module';
import { AppbarModule } from '../appbar/appbar.module';
import { SyllabusCourseModule } from '../syllabus-course/syllabus-course.module';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    AppbarModule,
    TuiTabsModule,
    InfoCourseModule,
    SyllabusCourseModule
  ]
})
export class CourseModule { }
