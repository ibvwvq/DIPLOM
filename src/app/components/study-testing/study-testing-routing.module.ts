import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyTestingComponent } from './study-testing.component';

const routes: Routes = [{ path: '', component: StudyTestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyTestingRoutingModule { }
