import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachRoutingModule } from './teach-routing.module';
import { TeachComponent } from './teach.component';

import {TuiTabsModule} from '@taiga-ui/kit';
import {AppbarModule} from "../appbar/appbar.module";
import {CreateCourseModule} from "../create-course/create-course.module";
import {TuiSvgModule} from '@taiga-ui/core';
import {CreatedCoursesModule} from "../created-courses/created-courses.module";
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiDialogModule} from '@taiga-ui/core';
@NgModule({
  declarations: [
    TeachComponent
  ],
  imports: [
    CommonModule,
    TeachRoutingModule,
    TuiTabsModule,
    AppbarModule,
    CreateCourseModule,
    TuiSvgModule,
    CreatedCoursesModule,
    TuiButtonModule,
    TuiDialogModule
  ]
})
export class TeachModule { }
