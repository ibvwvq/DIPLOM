import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyCourseRoutingModule } from './study-course-routing.module';
import { StudyCourseComponent } from './study-course.component';
import {TuiFilterByInputPipeModule, TuiTextAreaModule} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CodemirrorModule } from '@nomadreservations/ngx-codemirror';
import {AppbarModule} from "../appbar/appbar.module";
import {TuiButtonModule} from "@taiga-ui/core";

import {TuiDataListModule} from '@taiga-ui/core';
import {TuiComboBoxModule, TuiDataListWrapperModule} from '@taiga-ui/kit';
import {StudyProgrammingModule} from "../study-programming/study-programming.module";

import {TuiLoaderModule} from '@taiga-ui/core';

import {StudyTestingModule} from "../study-testing/study-testing.module";
@NgModule({
  declarations: [
    StudyCourseComponent
  ],
  imports: [
    CommonModule,
    StudyCourseRoutingModule,
    TuiTextAreaModule,
    ReactiveFormsModule,
    CodemirrorModule,
    FormsModule,
    AppbarModule,
    TuiButtonModule,
    TuiDataListModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    StudyProgrammingModule,
    TuiLoaderModule,
    StudyTestingModule
  ]
})
export class StudyCourseModule { }
