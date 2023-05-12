import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoLessonsRoutingModule } from './info-lessons-routing.module';
import { InfoLessonsComponent } from './info-lessons.component';
import { AppbarModule } from '../appbar/appbar.module';


import {TuiButtonModule} from '@taiga-ui/core';
import {TuiDialogModule} from '@taiga-ui/core';
import { CreateLessonsModuleModule } from '../create-lessons-module/create-lessons-module.module';
@NgModule({
  declarations: [
    InfoLessonsComponent
  ],
  imports: [
    CommonModule,
    InfoLessonsRoutingModule,
    AppbarModule,
    TuiButtonModule,
    TuiDialogModule,
    CreateLessonsModuleModule
  ]
})
export class InfoLessonsModule { }
