import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppbarCourseComponent } from './appbar-course.component';

const routes: Routes = [{ path: '', component: AppbarCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppbarCourseRoutingModule { }
