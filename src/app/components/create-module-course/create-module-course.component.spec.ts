import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModuleCourseComponent } from './create-module-course.component';

describe('CreateModuleCourseComponent', () => {
  let component: CreateModuleCourseComponent;
  let fixture: ComponentFixture<CreateModuleCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateModuleCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateModuleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
