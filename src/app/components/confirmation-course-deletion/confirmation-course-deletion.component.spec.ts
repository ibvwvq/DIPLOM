import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCourseDeletionComponent } from './confirmation-course-deletion.component';

describe('ConfirmationCourseDeletionComponent', () => {
  let component: ConfirmationCourseDeletionComponent;
  let fixture: ComponentFixture<ConfirmationCourseDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationCourseDeletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationCourseDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
