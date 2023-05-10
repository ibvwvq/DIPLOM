import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCourseRoutingModule } from './create-course-routing.module';
import { CreateCourseComponent } from './create-course.component';
import {AppbarModule} from "../appbar/appbar.module";
import {ReactiveFormsModule} from "@angular/forms";

import {TuiInputModule} from '@taiga-ui/kit';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiNotificationModule} from '@taiga-ui/core';
@NgModule({
  declarations: [
    CreateCourseComponent
  ],
  exports: [
    CreateCourseComponent
  ],
  imports: [
    CommonModule,
    CreateCourseRoutingModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    TuiNotificationModule
  ]
})
export class CreateCourseModule { }
