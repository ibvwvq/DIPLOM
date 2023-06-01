import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckingLessonsRoutingModule } from './checking-lessons-routing.module';
import { CheckingLessonsComponent } from './checking-lessons.component';


@NgModule({
  declarations: [
    CheckingLessonsComponent
  ],
  imports: [
    CommonModule,
    CheckingLessonsRoutingModule
  ]
})
export class CheckingLessonsModule { }
