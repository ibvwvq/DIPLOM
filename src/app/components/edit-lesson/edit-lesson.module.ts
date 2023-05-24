import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditLessonRoutingModule } from './edit-lesson-routing.module';
import { EditLessonComponent } from './edit-lesson.component';


@NgModule({
  declarations: [
    EditLessonComponent
  ],
  imports: [
    CommonModule,
    EditLessonRoutingModule
  ]
})
export class EditLessonModule { }
