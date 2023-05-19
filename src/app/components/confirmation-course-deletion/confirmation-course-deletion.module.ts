import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationCourseDeletionRoutingModule } from './confirmation-course-deletion-routing.module';
import { ConfirmationCourseDeletionComponent } from './confirmation-course-deletion.component';


@NgModule({
  declarations: [
    ConfirmationCourseDeletionComponent
  ],
  imports: [
    CommonModule,
    ConfirmationCourseDeletionRoutingModule
  ]
})
export class ConfirmationCourseDeletionModule { }
