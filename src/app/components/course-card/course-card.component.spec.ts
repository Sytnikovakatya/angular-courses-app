import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCardComponent],
    });
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call delete method and print console.log', () => {
    spyOn(console, 'log');
    component.delete(1);
    expect(console.log).toHaveBeenCalledWith('Delete №1');
  });

  it('should trasform duration of course to string', () => {
    let mockDuration = component.transformMinute(110);
    expect(mockDuration).toBe('1h 50 mins');
  });

  it('should trasform duration of course to string (if minutes < 0)', () => {
    let mockDuration = component.transformMinute(120);
    expect(mockDuration).toBe('2 hours');
  });

  it('should trasform duration of course to string (if minutes < 10)', () => {
    let mockDuration = component.transformMinute(125);
    expect(mockDuration).toBe('2h 05 mins');
  });
});
