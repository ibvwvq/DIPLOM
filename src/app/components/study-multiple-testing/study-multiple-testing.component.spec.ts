import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMultipleTestingComponent } from './study-multiple-testing.component';

describe('StudyMultipleTestingComponent', () => {
  let component: StudyMultipleTestingComponent;
  let fixture: ComponentFixture<StudyMultipleTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyMultipleTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyMultipleTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
