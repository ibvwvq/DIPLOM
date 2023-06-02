import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationLeaveCourseDeletionComponent } from './confirmation-leave-course-deletion.component';

describe('ConfirmationLeaveCourseDeletionComponent', () => {
  let component: ConfirmationLeaveCourseDeletionComponent;
  let fixture: ComponentFixture<ConfirmationLeaveCourseDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationLeaveCourseDeletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationLeaveCourseDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
