import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeUserRoutingModule } from './change-user-routing.module';
import { ChangeUserComponent } from './change-user.component';


@NgModule({
  declarations: [
    ChangeUserComponent
  ],
  imports: [
    CommonModule,
    ChangeUserRoutingModule
  ]
})
export class ChangeUserModule { }
