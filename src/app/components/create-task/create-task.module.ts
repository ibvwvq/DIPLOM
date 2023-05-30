import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTaskRoutingModule } from './create-task-routing.module';
import { CreateTaskComponent } from './create-task.component';
import {TuiButtonModule, TuiDataListModule} from '@taiga-ui/core';
import {TuiComboBoxModule, TuiDataListWrapperModule} from '@taiga-ui/kit';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TuiFilterByInputPipeModule, TuiTextAreaModule} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/kit';
import {TuiNotificationModule} from '@taiga-ui/core';
import { CKEditorModule } from 'ng2-ckeditor';
@NgModule({
    declarations: [
        CreateTaskComponent
    ],
    exports: [
        CreateTaskComponent
    ],
  imports: [
    CommonModule,
    CreateTaskRoutingModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiDataListModule,
    FormsModule,
    TuiFilterByInputPipeModule,
    TuiTextAreaModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiInputModule,
    TuiNotificationModule,
    CKEditorModule
  ]
})
export class CreateTaskModule { }
