import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusCourseRoutingModule } from './syllabus-course-routing.module';
import { SyllabusCourseComponent } from './syllabus-course.component';
import { AppbarModule } from '../appbar/appbar.module';
import {TuiTabsModule} from '@taiga-ui/kit';
import { AppbarCourseModule } from '../appbar-course/appbar-course.module';
import {TuiButtonModule} from '@taiga-ui/core';
import { CreateModuleCourseModule } from '../create-module-course/create-module-course.module';
import {TuiDialogModule} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';
@NgModule({
  declarations: [
    SyllabusCourseComponent
  ],
  exports:[SyllabusCourseComponent],
  imports: [
    CommonModule,
    SyllabusCourseRoutingModule,
    AppbarModule,
    TuiTabsModule,
    AppbarCourseModule,
    TuiButtonModule,
    CreateModuleCourseModule,
    TuiDialogModule,
    TuiIslandModule
  ]
})
export class SyllabusCourseModule { }
