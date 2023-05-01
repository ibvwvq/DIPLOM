import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppbarRoutingModule } from './appbar-routing.module';
import { AppbarComponent } from './appbar.component';


@NgModule({
  declarations: [
    AppbarComponent
  ],
  exports:[AppbarComponent],
  imports: [
    CommonModule,
    AppbarRoutingModule
  ]
})
export class AppbarModule { }
