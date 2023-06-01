import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoCourseRoutingModule } from './promo-course-routing.module';
import { PromoCourseComponent } from './promo-course.component';
import {TuiButtonModule, TuiSvgModule} from "@taiga-ui/core";
import {AppbarModule} from "../appbar/appbar.module";

@NgModule({
  declarations: [
    PromoCourseComponent
  ],
  imports: [
    CommonModule,
    PromoCourseRoutingModule,
    TuiSvgModule,
    TuiButtonModule,
    AppbarModule,
  ]
})
export class PromoCourseModule { }
