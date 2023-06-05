import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckingLessonsRoutingModule } from './checking-lessons-routing.module';
import { CheckingLessonsComponent } from './checking-lessons.component';
import {AppbarModule} from "../appbar/appbar.module";
import {TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule, TuiLinkModule, TuiSvgModule} from "@taiga-ui/core";
import {TuiIslandModule} from "@taiga-ui/kit";


@NgModule({
  declarations: [
    CheckingLessonsComponent
  ],
    imports: [
        CommonModule,
        CheckingLessonsRoutingModule,
        AppbarModule,
        TuiButtonModule,
        TuiDataListModule,
        TuiHostedDropdownModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiSvgModule
    ]
})
export class CheckingLessonsModule { }
