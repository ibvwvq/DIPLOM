import { TestBed } from '@angular/core/testing';

import { InfoCourseService } from './info-course.service';

describe('InfoCourseService', () => {
  let service: InfoCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
