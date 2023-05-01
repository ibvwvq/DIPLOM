import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppbarComponent } from './appbar.component';

const routes: Routes = [{ path: '', component: AppbarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppbarRoutingModule { }
