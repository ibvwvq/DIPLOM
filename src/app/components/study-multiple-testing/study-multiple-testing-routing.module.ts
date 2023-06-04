import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyMultipleTestingComponent } from './study-multiple-testing.component';

const routes: Routes = [{ path: '', component: StudyMultipleTestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyMultipleTestingRoutingModule { }
