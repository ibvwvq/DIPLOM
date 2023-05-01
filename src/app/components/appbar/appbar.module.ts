import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppbarRoutingModule } from './appbar-routing.module';
import { AppbarComponent } from './appbar.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppbarComponent
  ],
  exports:[AppbarComponent],
  imports: [
    CommonModule,
    AppbarRoutingModule,
    TuiButtonModule,
    TuiInputModule,
    ReactiveFormsModule
  ]
})
export class AppbarModule { }
