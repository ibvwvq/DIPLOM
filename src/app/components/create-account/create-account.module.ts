import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account.component';
import {AppbarModule} from "../appbar/appbar.module";
import {TuiComboBoxModule, TuiFilterByInputPipeModule, TuiProgressModule} from '@taiga-ui/kit';
import {TuiLabelModule, TuiSvgModule} from "@taiga-ui/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    AppbarModule,
    TuiProgressModule,
    TuiLabelModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiDataListModule,
    FormsModule,
    ReactiveFormsModule,
    TuiComboBoxModule,
    TuiFilterByInputPipeModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiInputModule
  ]
})
export class CreateAccountModule { }
