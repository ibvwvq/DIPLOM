import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyMultipleTestingRoutingModule } from './study-multiple-testing-routing.module';
import { StudyMultipleTestingComponent } from './study-multiple-testing.component';


@NgModule({
  declarations: [
    StudyMultipleTestingComponent
  ],
  imports: [
    CommonModule,
    StudyMultipleTestingRoutingModule
  ]
})
export class StudyMultipleTestingModule { }
