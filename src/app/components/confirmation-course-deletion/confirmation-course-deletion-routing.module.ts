import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationCourseDeletionComponent } from './confirmation-course-deletion.component';

const routes: Routes = [{ path: '', component: ConfirmationCourseDeletionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationCourseDeletionRoutingModule {
  static logout$: any;
}
