import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLessonComponent } from './edit-lesson.component';

const routes: Routes = [{ path: '', component: EditLessonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditLessonRoutingModule { }
