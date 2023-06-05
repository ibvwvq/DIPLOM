import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckLessonRoutingModule } from './check-lesson-routing.module';
import { CheckLessonComponent } from './check-lesson.component';
import {AppbarModule} from "../appbar/appbar.module";


@NgModule({
  declarations: [
    CheckLessonComponent
  ],
    imports: [
        CommonModule,
        CheckLessonRoutingModule,
        AppbarModule
    ]
})
export class CheckLessonModule { }
