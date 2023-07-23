import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

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
      imports: [HttpClientTestingModule],
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

  it('should emit the ID when delete method is called', () => {
    const mockId = 123;
    const activeModal = TestBed.inject(NgbActiveModal);
    spyOn(activeModal, 'close');

    component.id = mockId;
    component.delete();

    expect(activeModal.close).toHaveBeenCalledWith(mockId);
  });
});
