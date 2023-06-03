import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyProgrammingComponent } from './study-programming.component';

const routes: Routes = [{ path: '', component: StudyProgrammingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyProgrammingRoutingModule { }
