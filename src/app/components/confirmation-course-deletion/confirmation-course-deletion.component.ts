import { Component, OnInit } from '@angular/core';
import { CreatedCoursesService } from 'src/app/services/created-courses/created-courses.service';

@Component({
  selector: 'app-confirmation-course-deletion',
  templateUrl: './confirmation-course-deletion.component.html',
  styleUrls: ['./confirmation-course-deletion.component.less']
})
export class ConfirmationCourseDeletionComponent implements OnInit {
    constructor(private createdCourseService: CreatedCoursesService){}

    course_delete = this.createdCourseService.course_delete;

    ngOnInit() {
    
    }
}
