import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgrammingComponent } from './study-programming.component';

describe('StudyProgrammingComponent', () => {
  let component: StudyProgrammingComponent;
  let fixture: ComponentFixture<StudyProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyProgrammingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
