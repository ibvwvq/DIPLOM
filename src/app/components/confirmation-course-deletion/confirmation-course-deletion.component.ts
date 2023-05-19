import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { CreatedCoursesService } from 'src/app/services/created-courses/created-courses.service';

@Component({
  selector: 'app-confirmation-course-deletion',
  templateUrl: './confirmation-course-deletion.component.html',
  styleUrls: ['./confirmation-course-deletion.component.less']
})
export class ConfirmationCourseDeletionComponent implements OnInit {
    constructor(
      private dataService: ApiService,
      private createdCourseService: CreatedCoursesService,){}

    course_delete = this.createdCourseService.course_delete;

    ngOnInit() {
    
    }

    reLoad(){
      this.dataService.deleteCourse(this.course_delete.idCourse)
      .pipe(first())
      .subscribe(
        data => {
         console.log(data);
         window.location.reload();

        },
        error => {
          console.log(error);
        });
    }
}
