import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DurationComponent {
  @Input() bindModelData: number;
  @Output() bindModelDataChange = new EventEmitter<number>();

  updateData(event: number): void {
    this.bindModelData = event;
    this.bindModelDataChange.emit(event);
  }
}
