import {Inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuiSvgService } from '@taiga-ui/core';
import { AuthguardGuard } from './authguard.guard';
import {DomSanitizer} from "@angular/platform-browser";
import {tuiIconPlus} from "@taiga-ui/icons";
import {TeacherguardGuard} from "./teacherguard.guard";
import {AdminguardGuard} from "./adminguard.guard";
import {StudentguardGuard} from "./studentguard.guard";

const routes: Routes = [
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'catalog', loadChildren: () => import('./components/catalog/catalog.module').then(m => m.CatalogModule), canActivate: [AuthguardGuard,StudentguardGuard]},
  { path: 'personal-account', loadChildren: () => import('./components/personal-account/personal-account.module').then(m => m.PersonalAccountModule) , canActivate: [AuthguardGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'teach', loadChildren: () => import('./components/created-courses/created-courses.module').then(m => m.CreatedCoursesModule) , canActivate: [AuthguardGuard,TeacherguardGuard]},
  { path: 'course/info/:id', loadChildren: () => import('./components/syllabus-course/syllabus-course.module').then(m => m.SyllabusCourseModule),canActivate: [AuthguardGuard,TeacherguardGuard] },
  { path: 'edit-lesson/:idLesson', loadChildren: () => import('./components/edit-lesson/edit-lesson.module').then(m => m.EditLessonModule) },
  { path: 'create-account', loadChildren: () => import('./components/create-account/create-account.module').then(m => m.CreateAccountModule),canActivate:[AuthguardGuard,AdminguardGuard] },
  { path: 'checking-lessons', loadChildren: () => import('./components/checking-lessons/checking-lessons.module').then(m => m.CheckingLessonsModule),canActivate: [AuthguardGuard,TeacherguardGuard] },
  { path: 'course/:idCourse/promo', loadChildren: () => import('./components/promo-course/promo-course.module').then(m => m.PromoCourseModule) ,canActivate: [AuthguardGuard,StudentguardGuard]},
  { path: 'learn', loadChildren: () => import('./components/learn/learn.module').then(m => m.LearnModule) },
  { path: 'study/:idCourse/module/:idModule/lesson/:idLesson/step/:idTask', loadChildren: () => import('./components/study-course/study-course.module').then(m => m.StudyCourseModule),canActivate: [AuthguardGuard,StudentguardGuard] },
  { path: 'confirmation-leave-course-deletion', loadChildren: () => import('./components/confirmation-leave-course-deletion/confirmation-leave-course-deletion.module').then(m => m.ConfirmationLeaveCourseDeletionModule) },
  { path: 'study-programming', loadChildren: () => import('./components/study-programming/study-programming.module').then(m => m.StudyProgrammingModule) },
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
