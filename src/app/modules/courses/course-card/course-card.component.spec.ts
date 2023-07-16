import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { By } from '@angular/platform-browser';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DurationPipe } from '@pipes/duration/duration.pipe';
import { HighlightDirective } from '@directives/hightlight/highlight.directive';
import { IfAuthenticatedDirective } from '@directives/ifAuthenticated/if-authenticated.directive';

import { CoursesService } from '@services/courses/courses.service';

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
  let modalService: NgbModal;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        CourseCardComponent,
        MockButtonComponent,
        DurationPipe,
        HighlightDirective,
        IfAuthenticatedDirective,
      ],
      providers: [NgbModal, CoursesService],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isTopRated to false by default', () => {
    expect(component.isTopRated).toBeFalse();
  });

  it('should apply "special-card" class when isTopRated is true', () => {
    component.isTopRated = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
    const cardElement = fixture.nativeElement.querySelector('.card');
    expect(cardElement.classList.contains('special-card')).toBeTrue();
  });

  it('should render the course card with correct details', () => {
    const cardTitleElement = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    const cardLengthElement = fixture.debugElement.query(By.css('.card-duration')).nativeElement;
    const cardDateElement = fixture.debugElement.query(By.css('.card-date')).nativeElement;
    const cardDescriptionElement = fixture.debugElement.query(By.css('.card-description')).nativeElement;

    fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
    expect(cardTitleElement.textContent.trim()).toBe(`Video Course 1. JAVASCRIPT`);
    expect(cardLengthElement.textContent.trim()).toBe('2 hours');
    expect(cardDateElement.textContent.trim()).toBe('14 Jun 2023');
    expect(cardDescriptionElement.textContent.trim()).toBe(mockCourse.description);
  });

  it('should navigate to edit course on editCourse', () => {
    const courseId = 1;
    spyOn(component['router'], 'navigate');

    component.editCourse({
      id: 1,
      name: 'Javascript New',
      date: '2017-09-28T04:39:24+00:00',
      length: 120,
      isTopRated: false,
      description: 'New description',
      authors: [
        {
          id: 8413,
          name: 'Greta',
        },
      ],
    });

    expect(component['router'].navigate).toHaveBeenCalledWith(['/courses', courseId]);
  });
});
