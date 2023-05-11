import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusCourseComponent } from './syllabus-course.component';

describe('SyllabusCourseComponent', () => {
  let component: SyllabusCourseComponent;
  let fixture: ComponentFixture<SyllabusCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabusCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
