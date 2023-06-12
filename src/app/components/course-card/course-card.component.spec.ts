import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { DurationPipe } from '@pipes/duration/duration.pipe';
import { HighlightDirective } from '@directives/hightlight/highlight.directive';

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

const mockCourse = { id: 1, name: 'Javascript', date: Date.now(), length: 120, description: 'description' };

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCardComponent, MockButtonComponent, DurationPipe, HighlightDirective],
    });
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isTopRated to false by default', () => {
    expect(component.isTopRated).toBeFalse();
  });

  it('should apply "text-bg-dark" class when isTopRated is true', () => {
    component.isTopRated = true;
    fixture.detectChanges();
    const cardElement = fixture.nativeElement.querySelector('.card');
    expect(cardElement.classList.contains('text-bg-dark')).toBeTrue();
  });

  it('should render the course card with correct details', () => {
    const cardTitleElement = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    const cardLengthElement = fixture.debugElement.query(By.css('.card-duration')).nativeElement;
    const cardDateElement = fixture.debugElement.query(By.css('.card-date')).nativeElement;
    const cardDescriptionElement = fixture.debugElement.query(By.css('.card-description')).nativeElement;

    expect(cardTitleElement.textContent.trim()).toBe(`Video Course 1. JAVASCRIPT`);
    expect(cardLengthElement.textContent.trim()).toBe('2 hours');
    expect(cardDateElement.textContent.trim()).toBe('12 Jun 2023');
    expect(cardDescriptionElement.textContent.trim()).toBe(mockCourse.description);
  });

  it('should apply "lightgreen" background color when date is within 14 days from today', () => {
    const today = new Date();
    const within14Days = today.getTime() - 13 * 24 * 60 * 60 * 1000;
    expect(component.higlightByDate(within14Days)).toBe('lightgreen');
  });

  it('should apply "#0d6efd" background color when date is in the future', () => {
    const futureDate = new Date().getTime() + 24 * 60 * 60 * 1000;
    expect(component.higlightByDate(futureDate)).toBe('#0d6efd');
  });

  it('should apply "lightgrey" background color when date is in the past', () => {
    const pastDate = new Date().getTime() - 20 * 24 * 60 * 60 * 1000;
    expect(component.higlightByDate(pastDate)).toBe('lightgrey');
  });

  it('should call delete method and print console.log', () => {
    spyOn(console, 'log');
    component.delete(1);
    expect(console.log).toHaveBeenCalledWith('Delete №1');
  });
});
