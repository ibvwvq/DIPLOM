import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalAccountRoutingModule } from './personal-account-routing.module';
import { PersonalAccountComponent } from './personal-account.component';
import {TuiTabsModule} from '@taiga-ui/kit';
import {AppbarModule} from "../appbar/appbar.module";
import {TuiAvatarModule} from '@taiga-ui/kit';
import {TuiIslandModule} from '@taiga-ui/kit';
import {FooterModule} from "../footer/footer.module";
@NgModule({
  declarations: [
    PersonalAccountComponent
  ],
    imports: [
        CommonModule,
        PersonalAccountRoutingModule,
        TuiTabsModule,
        AppbarModule,
        TuiAvatarModule,
        TuiIslandModule,
        FooterModule
    ]
})
export class PersonalAccountModule { }
