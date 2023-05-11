import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbarCourseComponent } from './appbar-course.component';

describe('AppbarCourseComponent', () => {
  let component: AppbarCourseComponent;
  let fixture: ComponentFixture<AppbarCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppbarCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppbarCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
