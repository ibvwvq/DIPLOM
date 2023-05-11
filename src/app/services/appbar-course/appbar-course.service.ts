import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppbarCourseService {

  constructor(public route:Router) { }
  activeItemIndex = 0;

}
