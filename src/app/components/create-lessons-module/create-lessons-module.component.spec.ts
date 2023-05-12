import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLessonsModuleComponent } from './create-lessons-module.component';

describe('CreateLessonsModuleComponent', () => {
  let component: CreateLessonsModuleComponent;
  let fixture: ComponentFixture<CreateLessonsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLessonsModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLessonsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
