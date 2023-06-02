import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationLeaveCourseDeletionComponent } from './confirmation-leave-course-deletion.component';

const routes: Routes = [{ path: '', component: ConfirmationLeaveCourseDeletionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationLeaveCourseDeletionRoutingModule { }
