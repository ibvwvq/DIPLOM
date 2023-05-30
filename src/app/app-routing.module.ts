import {Inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuiSvgService } from '@taiga-ui/core';
import { AuthguardGuard } from './authguard.guard';
import {DomSanitizer} from "@angular/platform-browser";
import {tuiIconPlus} from "@taiga-ui/icons";
import {TeacherguardGuard} from "./teacherguard.guard";
import {AdminguardGuard} from "./adminguard.guard";

const routes: Routes = [
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'catalog', loadChildren: () => import('./components/catalog/catalog.module').then(m => m.CatalogModule), canActivate: [AuthguardGuard]},
  { path: 'personal-account', loadChildren: () => import('./components/personal-account/personal-account.module').then(m => m.PersonalAccountModule) , canActivate: [AuthguardGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'teach', loadChildren: () => import('./components/created-courses/created-courses.module').then(m => m.CreatedCoursesModule) , canActivate: [TeacherguardGuard,AuthguardGuard]},
  { path: 'course/info/:id', loadChildren: () => import('./components/syllabus-course/syllabus-course.module').then(m => m.SyllabusCourseModule),canActivate: [TeacherguardGuard,AuthguardGuard] },
  { path: 'edit-lesson/:idLesson', loadChildren: () => import('./components/edit-lesson/edit-lesson.module').then(m => m.EditLessonModule) },
  { path: 'create-task', loadChildren: () => import('./components/create-task/create-task.module').then(m => m.CreateTaskModule) },
  { path: 'create-account', loadChildren: () => import('./components/create-account/create-account.module').then(m => m.CreateAccountModule),canActivate:[AdminguardGuard,AuthguardGuard] },
  { path: 'footer', loadChildren: () => import('./components/footer/footer.module').then(m => m.FooterModule) },

  // { path: 'course/edit/:id/module/:idModule/info', loadChildren: () => import('./components/info-lessons/info-lessons.module').then(m => m.InfoLessonsModule) },
  // { path: 'confirmation-course-deletion', loadChildren: () => import('./components/confirmation-course-deletion/confirmation-course-deletion.module').then(m => m.ConfirmationCourseDeletionModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(
    @Inject(TuiSvgService) svgService: TuiSvgService,
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
  ) {
    svgService.define({
      tuiIconPlus: tuiIconPlus
    });
  }
}
