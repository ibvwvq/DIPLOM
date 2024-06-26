import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationLeaveCourseDeletionRoutingModule } from './confirmation-leave-course-deletion-routing.module';
import { ConfirmationLeaveCourseDeletionComponent } from './confirmation-leave-course-deletion.component';
import {TuiButtonModule} from "@taiga-ui/core";


@NgModule({
    declarations: [
        ConfirmationLeaveCourseDeletionComponent
    ],
    exports: [
        ConfirmationLeaveCourseDeletionComponent
    ],
  imports: [
    CommonModule,
    ConfirmationLeaveCourseDeletionRoutingModule,
    TuiButtonModule
  ]
})
export class ConfirmationLeaveCourseDeletionModule { }
