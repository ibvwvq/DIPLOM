import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckingLessonsComponent } from './checking-lessons.component';

const routes: Routes = [{ path: '', component: CheckingLessonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckingLessonsRoutingModule { }
