import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent {
  @Input() id: number;

  constructor(public activeModal: NgbActiveModal) {}

  delete(id: number): void {
    console.log('Delete №' + id);

    this.activeModal.close('Confirm click');
  }
}
