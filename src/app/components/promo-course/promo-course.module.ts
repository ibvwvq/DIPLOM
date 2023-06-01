import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoCourseRoutingModule } from './promo-course-routing.module';
import { PromoCourseComponent } from './promo-course.component';


@NgModule({
  declarations: [
    PromoCourseComponent
  ],
  imports: [
    CommonModule,
    PromoCourseRoutingModule
  ]
})
export class PromoCourseModule { }
