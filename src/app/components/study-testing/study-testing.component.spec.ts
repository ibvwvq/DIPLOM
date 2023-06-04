import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTestingComponent } from './study-testing.component';

describe('StudyTestingComponent', () => {
  let component: StudyTestingComponent;
  let fixture: ComponentFixture<StudyTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
