import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckingLessonsRoutingModule } from './checking-lessons-routing.module';
import { CheckingLessonsComponent } from './checking-lessons.component';
import {AppbarModule} from "../appbar/appbar.module";


@NgModule({
  declarations: [
    CheckingLessonsComponent
  ],
    imports: [
        CommonModule,
        CheckingLessonsRoutingModule,
        AppbarModule
    ]
})
export class CheckingLessonsModule { }
