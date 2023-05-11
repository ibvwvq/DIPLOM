import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusCourseRoutingModule } from './syllabus-course-routing.module';
import { SyllabusCourseComponent } from './syllabus-course.component';
import { AppbarModule } from '../appbar/appbar.module';
import {TuiTabsModule} from '@taiga-ui/kit';

@NgModule({
  declarations: [
    SyllabusCourseComponent
  ],
  imports: [
    CommonModule,
    SyllabusCourseRoutingModule,
    AppbarModule,
    TuiTabsModule
  ]
})
export class SyllabusCourseModule { }
