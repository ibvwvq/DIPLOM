import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyMultipleTestingRoutingModule } from './study-multiple-testing-routing.module';
import { StudyMultipleTestingComponent } from './study-multiple-testing.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiRadioLabeledModule} from '@taiga-ui/kit';
import {TuiButtonModule, TuiLoaderModule} from "@taiga-ui/core";

import {TuiNotificationModule} from '@taiga-ui/core';
@NgModule({
    declarations: [
        StudyMultipleTestingComponent
    ],
    exports: [
        StudyMultipleTestingComponent
    ],
    imports: [
        CommonModule,
        StudyMultipleTestingRoutingModule,
        TuiRadioLabeledModule,
        FormsModule,
        ReactiveFormsModule,
        TuiLoaderModule,
        TuiButtonModule,
        TuiNotificationModule
    ]
})
export class StudyMultipleTestingModule { }
