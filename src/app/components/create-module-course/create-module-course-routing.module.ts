import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateModuleCourseComponent } from './create-module-course.component';

const routes: Routes = [{ path: '', component: CreateModuleCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateModuleCourseRoutingModule { }
