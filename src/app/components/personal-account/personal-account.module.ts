import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalAccountRoutingModule } from './personal-account-routing.module';
import { PersonalAccountComponent } from './personal-account.component';


@NgModule({
  declarations: [
    PersonalAccountComponent
  ],
  imports: [
    CommonModule,
    PersonalAccountRoutingModule
  ]
})
export class PersonalAccountModule { }
