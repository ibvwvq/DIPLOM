import { Injectable } from '@angular/core';
import { InfoCourseService } from '../info-course/info-course.service';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {

  constructor(private infoCourseService:InfoCourseService) { }

  current_course:any = this.infoCourseService.current_course;
}
