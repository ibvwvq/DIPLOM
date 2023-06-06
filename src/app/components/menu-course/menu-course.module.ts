import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuCourseRoutingModule } from './menu-course-routing.module';
import { MenuCourseComponent } from './menu-course.component';
import {TuiIslandModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule, TuiSvgModule} from "@taiga-ui/core";


@NgModule({
    declarations: [
        MenuCourseComponent
    ],
    exports: [
        MenuCourseComponent
    ],
  imports: [
    CommonModule,
    MenuCourseRoutingModule,
    TuiIslandModule,
    TuiSvgModule,
    TuiButtonModule,
    TuiDataListModule,
    TuiHostedDropdownModule
  ]
})
export class MenuCourseModule { }
