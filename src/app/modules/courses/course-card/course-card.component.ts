import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Course } from '@shared/interfaces/course.interface';

import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  @Input() course: Course;
  @Output() newDeleteEvent = new EventEmitter<string>();

  isTopRated = false;

  constructor(private modalService: NgbModal, private router: Router) {}

  editCourse(course: Course): void {
    this.router.navigate(['/courses', course.id]);
  }

  delete(id: number): void {
    const modalRef = this.modalService.open(DeleteModalComponent, { centered: true });
    modalRef.componentInstance.id = id;

    modalRef.result.then(() => {
      this.newDeleteEvent.emit(id.toString());
    });
  }
}
