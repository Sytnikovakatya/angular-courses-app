import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CoursesService } from '@services/courses/courses.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent {
  @Input() id: number;

  constructor(public activeModal: NgbActiveModal, public coursesService: CoursesService) {}

  delete(id: number): void {
    this.coursesService.removeCourse(id);

    this.activeModal.close('Confirm click');
  }
}
