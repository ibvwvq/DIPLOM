import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoLessonsComponent } from './info-lessons.component';

const routes: Routes = [{ path: '', component: InfoLessonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoLessonsRoutingModule { }
