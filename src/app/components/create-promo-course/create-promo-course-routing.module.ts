import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePromoCourseComponent } from './create-promo-course.component';

const routes: Routes = [{ path: '', component: CreatePromoCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePromoCourseRoutingModule { }
