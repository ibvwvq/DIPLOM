import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLessonsComponent } from './info-lessons.component';

describe('InfoLessonsComponent', () => {
  let component: InfoLessonsComponent;
  let fixture: ComponentFixture<InfoLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
