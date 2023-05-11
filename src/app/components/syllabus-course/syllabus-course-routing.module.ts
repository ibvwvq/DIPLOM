import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyllabusCourseComponent } from './syllabus-course.component';

const routes: Routes = [{ path: '', component: SyllabusCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyllabusCourseRoutingModule { }
