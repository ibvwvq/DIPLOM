import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnComponent } from './learn.component';
import {AppbarModule} from "../appbar/appbar.module";

import {TuiDialogModule} from '@taiga-ui/core';

import { NgxPaginationModule } from 'ngx-pagination';

import {TuiLoaderModule} from '@taiga-ui/core';

import {TuiAlertModule} from '@taiga-ui/core';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
  TuiLinkModule, TuiSvgModule
} from "@taiga-ui/core";
import {TuiIslandModule} from "@taiga-ui/kit";
import {ConfirmationCourseDeletionModule} from "../confirmation-course-deletion/confirmation-course-deletion.module";
import {
  ConfirmationLeaveCourseDeletionModule
} from "../confirmation-leave-course-deletion/confirmation-leave-course-deletion.module";


@NgModule({
  declarations: [
    LearnComponent
  ],
  imports: [
    CommonModule,
    LearnRoutingModule,
    AppbarModule,
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
    TuiIslandModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiLoaderModule,
    NgxPaginationModule,
    TuiDialogModule,
    TuiAlertModule,
    ConfirmationCourseDeletionModule,
    ConfirmationLeaveCourseDeletionModule
  ]
})
export class LearnModule { }
