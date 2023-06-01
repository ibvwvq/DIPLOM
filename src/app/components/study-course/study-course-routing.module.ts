import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyCourseComponent } from './study-course.component';

const routes: Routes = [{ path: '', component: StudyCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyCourseRoutingModule { }
