import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePromoCourseComponent } from './create-promo-course.component';

describe('CreatePromoCourseComponent', () => {
  let component: CreatePromoCourseComponent;
  let fixture: ComponentFixture<CreatePromoCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePromoCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePromoCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
