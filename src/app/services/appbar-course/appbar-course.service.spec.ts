import { TestBed } from '@angular/core/testing';

import { AppbarCourseService } from './appbar-course.service';

describe('AppbarCourseService', () => {
  let service: AppbarCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppbarCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
