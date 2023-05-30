import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditLessonRoutingModule } from './edit-lesson-routing.module';
import { EditLessonComponent } from './edit-lesson.component';
import {AppbarModule} from "../appbar/appbar.module";
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from "@taiga-ui/core";
import {TuiForModule} from "@taiga-ui/cdk";
import {TuiFilterByInputPipeModule, TuiTextAreaModule} from '@taiga-ui/kit';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {TuiDialogModule} from '@taiga-ui/core'
import {CreateModuleCourseModule} from "../create-module-course/create-module-course.module";
import {CreateTaskModule} from "../create-task/create-task.module";
import {TuiLoaderModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import {FooterModule} from "../footer/footer.module";

import { CKEditorModule } from 'ng2-ckeditor';
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
    TuiFilterByInputPipeModule,
    TuiLinkModule,
    TuiDialogModule,
    CreateModuleCourseModule,
    CreateTaskModule,
    TuiLoaderModule,
    TuiInputModule,
    FooterModule,
    CKEditorModule
  ]
})
export class EditLessonModule { }
