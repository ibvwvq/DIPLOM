import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppbarCourseRoutingModule } from './appbar-course-routing.module';
import { AppbarCourseComponent } from './appbar-course.component';

import {TuiTabsModule} from '@taiga-ui/kit';
@NgModule({
  declarations: [
    AppbarCourseComponent
  ],
  exports:[AppbarCourseComponent],
  imports: [
    CommonModule,
    AppbarCourseRoutingModule,
    TuiTabsModule
  ]
})
export class AppbarCourseModule { }
