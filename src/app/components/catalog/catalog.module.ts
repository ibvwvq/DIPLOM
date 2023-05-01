import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { AppbarModule } from '../appbar/appbar.module';


@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    AppbarModule
  ]
})
export class CatalogModule { }
