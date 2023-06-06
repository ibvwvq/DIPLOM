import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCourseComponent } from './menu-course.component';

const routes: Routes = [{ path: '', component: MenuCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuCourseRoutingModule { }
