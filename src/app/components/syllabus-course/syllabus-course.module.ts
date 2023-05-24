import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusCourseRoutingModule } from './syllabus-course-routing.module';
import { SyllabusCourseComponent } from './syllabus-course.component';
import { AppbarModule } from '../appbar/appbar.module';
import {TuiInputModule, TuiSelectModule, TuiTabsModule} from '@taiga-ui/kit';
import {TuiButtonModule, TuiDataListModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import { CreateModuleCourseModule } from '../create-module-course/create-module-course.module';
import {TuiDialogModule} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiLoaderModule} from '@taiga-ui/core';
import {TuiLinkModule} from '@taiga-ui/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';
import {TuiDropdownModule} from '@taiga-ui/core';
import {TuiHostedDropdownModule} from '@taiga-ui/core';

@NgModule({
  declarations: [
    SyllabusCourseComponent
  ],
  exports:[SyllabusCourseComponent],
  imports: [
    CommonModule,
    SyllabusCourseRoutingModule,
    AppbarModule,
    TuiTabsModule,
    TuiButtonModule,
    CreateModuleCourseModule,
    TuiDialogModule,
    TuiIslandModule,
    TuiSvgModule,
    TuiLoaderModule,
    TuiLinkModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    NgxPaginationModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
    TuiDataListModule
  ]
})
export class SyllabusCourseModule { }
