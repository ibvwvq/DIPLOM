import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateLessonsModuleRoutingModule } from './create-lessons-module-routing.module';
import { CreateLessonsModuleComponent } from './create-lessons-module.component';

@NgModule({
  declarations: [
    CreateLessonsModuleComponent
  ],
  exports: [CreateLessonsModuleComponent],
  imports: [
    CommonModule,
    CreateLessonsModuleRoutingModule
  ]
})
export class CreateLessonsModuleModule { }
