import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationLeaveCourseDeletionRoutingModule } from './confirmation-leave-course-deletion-routing.module';
import { ConfirmationLeaveCourseDeletionComponent } from './confirmation-leave-course-deletion.component';


@NgModule({
  declarations: [
    ConfirmationLeaveCourseDeletionComponent
  ],
  imports: [
    CommonModule,
    ConfirmationLeaveCourseDeletionRoutingModule
  ]
})
export class ConfirmationLeaveCourseDeletionModule { }
