import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLessonComponent } from './check-lesson.component';

const routes: Routes = [{ path: '', component: CheckLessonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckLessonRoutingModule { }
