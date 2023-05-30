import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { AppbarModule } from '../appbar/appbar.module';
import { TuiInputModule, TuiTabsModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import {FooterModule} from "../footer/footer.module";


@NgModule({
  declarations: [
    CatalogComponent
  ],
    imports: [
        CommonModule,
        CatalogRoutingModule,
        AppbarModule,
        TuiTabsModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiButtonModule,
        FooterModule
    ]
})
export class CatalogModule { }
