import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { AppbarModule } from '../appbar/appbar.module';
import { TuiInputModule, TuiTabsModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiSvgModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/core';
import {FooterModule} from "../footer/footer.module";
import {TuiIslandModule} from '@taiga-ui/kit';
import { NgxPaginationModule } from 'ngx-pagination';
import {TuiLoaderModule} from '@taiga-ui/core';

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
    FooterModule,
    TuiIslandModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
    NgxPaginationModule,
    TuiLoaderModule,
    TuiTextfieldControllerModule
  ]
})
export class CatalogModule { }
