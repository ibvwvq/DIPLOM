import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { AuthguardGuard } from 'src/app/authguard.guard';

const routes: Routes = [{ path: '', component: CatalogComponent ,canActivate: [AuthguardGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
