import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCourseRoutingModule } from './info-course-routing.module';
import { InfoCourseComponent } from './info-course.component';
import { AppbarCourseModule } from '../appbar-course/appbar-course.module';

import {TuiTabsModule} from '@taiga-ui/kit';
@NgModule({
  declarations: [
    InfoCourseComponent
  ],
  exports: [InfoCourseComponent],
  imports: [
    CommonModule,
    InfoCourseRoutingModule,
    AppbarCourseModule,
    TuiTabsModule
  ]
})
export class InfoCourseModule { }
