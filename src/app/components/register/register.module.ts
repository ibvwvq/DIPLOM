import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {TuiButtonModule, TuiTextfieldControllerModule} from '@taiga-ui/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TUI_INPUT_PASSWORD_DEFAULT_OPTIONS, TUI_INPUT_PASSWORD_OPTIONS, TuiInputModule, TuiInputPasswordModule} from '@taiga-ui/kit';

import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiLoaderModule} from '@taiga-ui/core';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    TuiButtonModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    FormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiNotificationModule,
    TuiLoaderModule
  ],
  providers: [
    {
      provide: TUI_INPUT_PASSWORD_OPTIONS,
      useValue: {
        ...TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
        icons: {
          hide: 'tuiIconEyeOff',
          show: 'tuiIconEye',
        },
      },
    },
  ],
})
export class RegisterModule { }
