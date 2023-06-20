import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { DurationPipe } from '@pipes/duration/duration.pipe';
import { HighlightDirective } from '@directives/hightlight/highlight.directive';
import { IfAuthenticatedDirective } from '@directives/ifAuthenticated/if-authenticated.directive';

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

const mockCourse = {
  id: 1,
  name: 'Javascript',
  date: '2023-06-14T04:39:24+00:00',
  length: 120,
  description: 'description',
};

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseCardComponent,
        MockButtonComponent,
        DurationPipe,
        HighlightDirective,
        IfAuthenticatedDirective,
      ],
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

  it('should apply "special-card" class when isTopRated is true', () => {
    component.isTopRated = true;
    fixture.detectChanges();
    const cardElement = fixture.nativeElement.querySelector('.card');
    expect(cardElement.classList.contains('special-card')).toBeTrue();
  });

  it('should render the course card with correct details', () => {
    const cardTitleElement = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    const cardLengthElement = fixture.debugElement.query(By.css('.card-duration')).nativeElement;
    const cardDateElement = fixture.debugElement.query(By.css('.card-date')).nativeElement;
    const cardDescriptionElement = fixture.debugElement.query(By.css('.card-description')).nativeElement;

    expect(cardTitleElement.textContent.trim()).toBe(`Video Course 1. JAVASCRIPT`);
    expect(cardLengthElement.textContent.trim()).toBe('2 hours');
    expect(cardDateElement.textContent.trim()).toBe('14 Jun 2023');
    expect(cardDescriptionElement.textContent.trim()).toBe(mockCourse.description);
  });
});
