import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckLessonRoutingModule } from './check-lesson-routing.module';
import { CheckLessonComponent } from './check-lesson.component';
import {AppbarModule} from "../appbar/appbar.module";
import {TuiButtonModule, TuiSvgModule} from "@taiga-ui/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TuiTextAreaModule} from "@taiga-ui/kit";

@NgModule({
  declarations: [
    CheckLessonComponent
  ],
  imports: [
    CommonModule,
    CheckLessonRoutingModule,
    AppbarModule,
    TuiButtonModule,
    ReactiveFormsModule,
    TuiTextAreaModule,
    FormsModule,
    TuiSvgModule
  ]
})
export class CheckLessonModule { }
