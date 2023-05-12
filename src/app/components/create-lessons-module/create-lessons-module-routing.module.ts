import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLessonsModuleComponent } from './create-lessons-module.component';

const routes: Routes = [{ path: '', component: CreateLessonsModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateLessonsModuleRoutingModule { }
