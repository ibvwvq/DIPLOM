import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyProgrammingRoutingModule } from './study-programming-routing.module';
import { StudyProgrammingComponent } from './study-programming.component';


@NgModule({
  declarations: [
    StudyProgrammingComponent
  ],
  imports: [
    CommonModule,
    StudyProgrammingRoutingModule
  ]
})
export class StudyProgrammingModule { }
