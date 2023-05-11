import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateModuleCourseRoutingModule } from './create-module-course-routing.module';
import { CreateModuleCourseComponent } from './create-module-course.component';

import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';

import {TuiButtonModule} from '@taiga-ui/core';
@NgModule({
  declarations: [
    CreateModuleCourseComponent
  ],
  exports:[CreateModuleCourseComponent],
  imports: [
    CommonModule,
    CreateModuleCourseRoutingModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiButtonModule
  ]
})
export class CreateModuleCourseModule { }
