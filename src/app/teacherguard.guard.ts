import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { ApiService } from './services/api/api.service';


@Injectable({
  providedIn: 'root'
})

export class TeacherguardGuard implements CanActivate {
  constructor(private dataService: ApiService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const routeurl: string = this.router.url;
    return this.isLogin(routeurl);
  }

  isLogin(routeurl: string): any {

    if (this.dataService.isTeacher()) {
      return true;
    }

    this.dataService.redirectUrl = routeurl;
    this.router.navigate(['/#'+this.router.url], { queryParams: { returnUrl: routeurl } });
  }
}
