import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { CourseCardComponent } from './course-card.component';

@Component({
  selector: 'app-button',
  template: '<div>Mock Button Component</div>',
})
class MockButtonComponent {
  @Input() text: string;
  @Input() type: string;
  @Input() class: string;
  @Input() fontawesome: string;
}

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCardComponent, MockButtonComponent],
    });
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the course card with correct details', () => {
    const mockCourse = {
      id: 1,
      name: 'Javascript',
      date: '11/02/2023',
      length: 120,
      description: 'description',
    };

    component.course = mockCourse;
    fixture.detectChanges();

    const cardTitleElement = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    const cardLengthElement = fixture.debugElement.query(By.css('.card-duration')).nativeElement;
    const cardDateElement = fixture.debugElement.query(By.css('.card-date')).nativeElement;
    const cardDescriptionElement = fixture.debugElement.query(By.css('.card-description')).nativeElement;

    expect(cardTitleElement.textContent.trim()).toBe(`Video Course ${mockCourse.id}. ${mockCourse.name}`);
    expect(cardLengthElement.textContent.trim()).toBe(`${component.transformMinute(mockCourse.length)}`);
    expect(cardDateElement.textContent.trim()).toBe(mockCourse.date);
    expect(cardDescriptionElement.textContent.trim()).toBe(mockCourse.description);
  });

  it('should call delete method and print console.log', () => {
    spyOn(console, 'log');
    component.delete(1);
    expect(console.log).toHaveBeenCalledWith('Delete №1');
  });

  it('should transform minutes correctly', () => {
    expect(component.transformMinute(55)).toBe('55 mins');
    expect(component.transformMinute(60)).toBe('1 hour');
    expect(component.transformMinute(90)).toBe('1h 30 mins');
    expect(component.transformMinute(120)).toBe('2 hours');
    expect(component.transformMinute(125)).toBe('2h 05 mins');
  });
});
