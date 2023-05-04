import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) }, 
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'catalog', loadChildren: () => import('./components/catalog/catalog.module').then(m => m.CatalogModule), canActivate: [AuthguardGuard]},
  { path: 'personal-account', loadChildren: () => import('./components/personal-account/personal-account.module').then(m => m.PersonalAccountModule) , canActivate: [AuthguardGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'create-promo-course', loadChildren: () => import('./components/create-promo-course/create-promo-course.module').then(m => m.CreatePromoCourseModule) },
  { path: 'create-course', loadChildren: () => import('./components/create-course/create-course.module').then(m => m.CreateCourseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
