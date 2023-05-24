import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditLessonRoutingModule } from './edit-lesson-routing.module';
import { EditLessonComponent } from './edit-lesson.component';
import {AppbarModule} from "../appbar/appbar.module";
import {TuiButtonModule, TuiSvgModule} from "@taiga-ui/core";
import {TuiForModule} from "@taiga-ui/cdk";
import {TuiFilterByInputPipeModule, TuiTextAreaModule} from '@taiga-ui/kit';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiComboBoxModule, TuiDataListWrapperModule} from '@taiga-ui/kit';
@NgModule({
  declarations: [
    EditLessonComponent
  ],
  imports: [
    CommonModule,
    EditLessonRoutingModule,
    AppbarModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiForModule,
    TuiTextAreaModule,
    ReactiveFormsModule,
    FormsModule,
    TuiDataListWrapperModule,
    TuiComboBoxModule,
    TuiDataListModule,
    TuiFilterByInputPipeModule
  ]
})
export class EditLessonModule { }
