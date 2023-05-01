import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {TuiButtonModule} from '@taiga-ui/core';


import {FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {TUI_INPUT_PASSWORD_DEFAULT_OPTIONS, TUI_INPUT_PASSWORD_OPTIONS, TuiInputPasswordModule} from '@taiga-ui/kit';

import {TuiLinkModule} from '@taiga-ui/core';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TuiButtonModule,
    TuiLinkModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    FormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule
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
export class LoginModule { }
