import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteModalComponent {
  @Input() id: number;

  constructor(public activeModal: NgbActiveModal) {}

  delete(): void {
    this.activeModal.close(this.id);
  }
}
