import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInputComponent {
  @Input() class: string = 'form-control';
  @Input() bindModelData: string;
  @Output() bindModelDataChange = new EventEmitter<string>();

  updateData(event: string): void {
    this.bindModelData = event;
    this.bindModelDataChange.emit(event);
  }
}
