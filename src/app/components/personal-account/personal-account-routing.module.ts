import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalAccountComponent } from './personal-account.component';
import { AuthguardGuard } from 'src/app/authguard.guard';

const routes: Routes = [{ path: '', component: PersonalAccountComponent ,canActivate: [AuthguardGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalAccountRoutingModule { }
