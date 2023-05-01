import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {TuiButtonModule} from '@taiga-ui/core';

import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';

import {TuiNotificationModule} from '@taiga-ui/core';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiNotificationModule
  ]
})
export class RegisterModule { }
