import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CoursesService } from '@services/courses/courses.service';

import { DeleteModalComponent } from './delete-modal.component';

@Component({
  selector: 'app-button',
  template: '<div>Mock Button Component</div>',
})
class MockButtonComponent {
  @Input() text: string;
  @Input() class: string;
}

describe('DeleteModalComponent', () => {
  let component: DeleteModalComponent;
  let fixture: ComponentFixture<DeleteModalComponent>;
  let coursesService: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteModalComponent, MockButtonComponent],
      providers: [NgbActiveModal, CoursesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalComponent);
    component = fixture.componentInstance;
    coursesService = TestBed.inject(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call coursesService.removeCourse and close the modal when delete method is called', () => {
    const courseId = 1;
    spyOn(coursesService, 'removeCourse');
    spyOn(component.activeModal, 'close');

    component.delete();

    expect(coursesService.removeCourse).toHaveBeenCalledWith(courseId);
    expect(component.activeModal.close).toHaveBeenCalledWith('Confirm click');
  });
});
