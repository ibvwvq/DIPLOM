import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCourseRoutingModule } from './info-course-routing.module';
import { InfoCourseComponent } from './info-course.component';
import { AppbarCourseModule } from '../appbar-course/appbar-course.module';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiTabsModule} from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [
    InfoCourseComponent
  ],
  exports: [InfoCourseComponent],
  imports: [
    CommonModule,
    InfoCourseRoutingModule,
    AppbarCourseModule,
    TuiTabsModule,
    TuiIslandModule,
    TuiButtonModule
  ]
})
export class InfoCourseModule { }
