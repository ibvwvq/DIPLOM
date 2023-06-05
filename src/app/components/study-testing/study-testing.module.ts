import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyTestingRoutingModule } from './study-testing-routing.module';
import { StudyTestingComponent } from './study-testing.component';

import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';
import {TuiButtonModule, TuiLoaderModule, TuiNotificationModule} from "@taiga-ui/core";
@NgModule({
    declarations: [
        StudyTestingComponent
    ],
    exports: [
        StudyTestingComponent
    ],
  imports: [
    CommonModule,
    StudyTestingRoutingModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiNotificationModule,
    TuiLoaderModule
  ]
})
export class StudyTestingModule { }
