import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePromoCourseRoutingModule } from './create-promo-course-routing.module';
import { CreatePromoCourseComponent } from './create-promo-course.component';


@NgModule({
  declarations: [
    CreatePromoCourseComponent
  ],
  imports: [
    CommonModule,
    CreatePromoCourseRoutingModule
  ]
})
export class CreatePromoCourseModule { }
