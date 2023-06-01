import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnComponent } from './learn.component';
import {AppbarModule} from "../appbar/appbar.module";
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
  TuiLinkModule, TuiSvgModule
} from "@taiga-ui/core";
import {TuiIslandModule} from "@taiga-ui/kit";


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
    TuiSvgModule
  ]
})
export class LearnModule { }
