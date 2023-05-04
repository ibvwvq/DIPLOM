import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedCoursesComponent } from './created-courses.component';

const routes: Routes = [{ path: '', component: CreatedCoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatedCoursesRoutingModule { }
