import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedCoursesRoutingModule } from './created-courses-routing.module';
import { CreatedCoursesComponent } from './created-courses.component';


@NgModule({
  declarations: [
    CreatedCoursesComponent
  ],
  imports: [
    CommonModule,
    CreatedCoursesRoutingModule
  ]
})
export class CreatedCoursesModule { }
