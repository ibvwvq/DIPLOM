import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyCourseRoutingModule } from './study-course-routing.module';
import { StudyCourseComponent } from './study-course.component';
import {TuiTextAreaModule} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CodemirrorModule } from '@nomadreservations/ngx-codemirror';
import {AppbarModule} from "../appbar/appbar.module";
import {TuiButtonModule} from "@taiga-ui/core";
@NgModule({
  declarations: [
    StudyCourseComponent
  ],
  imports: [
    CommonModule,
    StudyCourseRoutingModule,
    TuiTextAreaModule,
    ReactiveFormsModule,
    CodemirrorModule,
    FormsModule,
    AppbarModule,
    TuiButtonModule
  ]
})
export class StudyCourseModule { }
