import { Component, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Course } from '@interfaces/course.interface';

import { DeleteModalComponent } from '@components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Input() course: Course;

  isTopRated = false;

  constructor(private modalService: NgbModal) {}

  delete(id: number): void {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.id = id;
  }
}
