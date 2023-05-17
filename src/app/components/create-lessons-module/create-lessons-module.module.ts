import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateLessonsModuleRoutingModule } from './create-lessons-module-routing.module';
import { CreateLessonsModuleComponent } from './create-lessons-module.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';

import {TuiButtonModule} from '@taiga-ui/core';
@NgModule({
  declarations: [
    CreateLessonsModuleComponent
  ],
  exports: [CreateLessonsModuleComponent],
  imports: [
    CommonModule,
    CreateLessonsModuleRoutingModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiButtonModule
  ]
})
export class CreateLessonsModuleModule { }
