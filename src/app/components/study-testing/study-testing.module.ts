import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyTestingRoutingModule } from './study-testing-routing.module';
import { StudyTestingComponent } from './study-testing.component';


@NgModule({
  declarations: [
    StudyTestingComponent
  ],
  imports: [
    CommonModule,
    StudyTestingRoutingModule
  ]
})
export class StudyTestingModule { }
