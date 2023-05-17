import { TestBed } from '@angular/core/testing';

import { InfoLessonsService } from './info-lessons.service';

describe('InfoLessonsService', () => {
  let service: InfoLessonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoLessonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
