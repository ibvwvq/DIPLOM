import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCourseComponent } from './promo-course.component';

describe('PromoCourseComponent', () => {
  let component: PromoCourseComponent;
  let fixture: ComponentFixture<PromoCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
