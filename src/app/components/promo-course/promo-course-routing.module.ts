import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoCourseComponent } from './promo-course.component';

const routes: Routes = [{ path: '', component: PromoCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoCourseRoutingModule { }
