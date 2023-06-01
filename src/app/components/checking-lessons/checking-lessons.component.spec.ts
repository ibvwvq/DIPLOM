import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingLessonsComponent } from './checking-lessons.component';

describe('CheckingLessonsComponent', () => {
  let component: CheckingLessonsComponent;
  let fixture: ComponentFixture<CheckingLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingLessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckingLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
