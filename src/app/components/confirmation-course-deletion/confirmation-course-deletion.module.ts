import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationCourseDeletionRoutingModule } from './confirmation-course-deletion-routing.module';
import { ConfirmationCourseDeletionComponent } from './confirmation-course-deletion.component';
import {TuiButtonModule} from '@taiga-ui/core';

@NgModule({
  declarations: [
    ConfirmationCourseDeletionComponent
  ],
  exports: [ConfirmationCourseDeletionComponent],
  imports: [
    CommonModule,
    ConfirmationCourseDeletionRoutingModule,
    TuiButtonModule
  ]
})
export class ConfirmationCourseDeletionModule { }
