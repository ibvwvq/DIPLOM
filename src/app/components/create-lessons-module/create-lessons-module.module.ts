import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateLessonsModuleRoutingModule } from './create-lessons-module-routing.module';
import { CreateLessonsModuleComponent } from './create-lessons-module.component';
import { AppbarModule } from '../appbar/appbar.module';
import {TuiButtonModule} from '@taiga-ui/core';

@NgModule({
  declarations: [
    CreateLessonsModuleComponent
  ],
  imports: [
    CommonModule,
    CreateLessonsModuleRoutingModule,
    AppbarModule,
    TuiButtonModule
  ]
})
export class CreateLessonsModuleModule { }
