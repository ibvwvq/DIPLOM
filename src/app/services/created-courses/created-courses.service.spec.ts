import { TestBed } from '@angular/core/testing';

import { CreatedCoursesService } from './created-courses.service';

describe('CreatedCoursesService', () => {
  let service: CreatedCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatedCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
