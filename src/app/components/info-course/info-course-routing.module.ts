import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoCourseComponent } from './info-course.component';

const routes: Routes = [{ path: '', component: InfoCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoCourseRoutingModule { }
