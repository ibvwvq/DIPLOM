import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusCourseRoutingModule } from './syllabus-course-routing.module';
import { SyllabusCourseComponent } from './syllabus-course.component';
import { AppbarModule } from '../appbar/appbar.module';
import {TuiTabsModule} from '@taiga-ui/kit';
import {TuiButtonModule} from '@taiga-ui/core';
import { CreateModuleCourseModule } from '../create-module-course/create-module-course.module';
import {TuiDialogModule} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiLoaderModule} from '@taiga-ui/core';
import { InfoLessonsModule } from '../info-lessons/info-lessons.module';
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
    TuiButtonModule,
    CreateModuleCourseModule,
    TuiDialogModule,
    TuiIslandModule,
    TuiSvgModule,
    TuiLoaderModule,
    InfoLessonsModule
  ]
})
export class SyllabusCourseModule { }
