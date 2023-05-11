import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateModuleCourseRoutingModule } from './create-module-course-routing.module';
import { CreateModuleCourseComponent } from './create-module-course.component';


@NgModule({
  declarations: [
    CreateModuleCourseComponent
  ],
  exports:[CreateModuleCourseComponent],
  imports: [
    CommonModule,
    CreateModuleCourseRoutingModule
  ]
})
export class CreateModuleCourseModule { }
