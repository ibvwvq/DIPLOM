import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusCourseRoutingModule } from './syllabus-course-routing.module';
import { SyllabusCourseComponent } from './syllabus-course.component';
import { AppbarModule } from '../appbar/appbar.module';
import {TuiTabsModule} from '@taiga-ui/kit';
import { AppbarCourseModule } from '../appbar-course/appbar-course.module';

@NgModule({
  declarations: [
    SyllabusCourseComponent
  ],
  imports: [
    CommonModule,
    SyllabusCourseRoutingModule,
    AppbarModule,
    TuiTabsModule,
    AppbarCourseModule
  ]
})
export class SyllabusCourseModule { }
