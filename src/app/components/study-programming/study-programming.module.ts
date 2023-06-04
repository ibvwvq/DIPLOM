import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyProgrammingRoutingModule } from './study-programming-routing.module';
import { StudyProgrammingComponent } from './study-programming.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule} from "@taiga-ui/core";
import {
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiInputDateTimeModule, TuiTextAreaModule
} from "@taiga-ui/kit";
import {TuiValueChangesModule} from "@taiga-ui/cdk";


@NgModule({
  declarations: [
    StudyProgrammingComponent
  ],
  exports: [
    StudyProgrammingComponent
  ],
  imports: [
    CommonModule,
    StudyProgrammingRoutingModule,
    FormsModule,
    TuiButtonModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiInputDateTimeModule,
    TuiTextAreaModule,
    ReactiveFormsModule,
    TuiValueChangesModule
  ]
})
export class StudyProgrammingModule { }
