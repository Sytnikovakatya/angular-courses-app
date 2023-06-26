import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DurationPipe } from '@pipes/duration/duration.pipe';
import { HighlightDirective } from '@directives/hightlight/highlight.directive';
import { IfAuthenticatedDirective } from '@directives/ifAuthenticated/if-authenticated.directive';

import { CoursesService } from '@services/courses/courses.service';

import { CourseCardComponent } from './course-card.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

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
  let coursesService: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CourseCardComponent,
        MockButtonComponent,
        DurationPipe,
        HighlightDirective,
        IfAuthenticatedDirective,
      ],
      providers: [NgbModal, CoursesService],
    })
      .overrideComponent(CourseCardComponent, {
        set: {
          changeDetection: ChangeDetectionStrategy.Default,
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    coursesService = TestBed.inject(CoursesService);
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

  it('should call editCourse method with correct parameters', () => {
    const course = {
      id: 1,
      name: 'Test Course',
      date: '2023-06-14T04:39:24+00:00',
      length: 60,
      description: 'Test Description',
    };
    const getCourseByIdSpy = spyOn(coursesService, 'getCourseById');
    const updateCourseSpy = spyOn(coursesService, 'updateCourse');

    component.editCourse(course);

    expect(getCourseByIdSpy).toHaveBeenCalledWith(course.id);
    expect(updateCourseSpy).toHaveBeenCalledWith(course);
  });

  it('should open delete modal with correct id', () => {
    const id = 1;
    const modalRef = jasmine.createSpyObj('NgbModalRef', ['componentInstance']);
    spyOn(modalService, 'open').and.returnValue(modalRef);

    component.delete(id);

    expect(modalService.open).toHaveBeenCalledWith(DeleteModalComponent);
    expect(modalRef.componentInstance.id).toEqual(id);
  });
});
