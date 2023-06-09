import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() placeholder = '';
  @Input() class: string = 'form-control';
  @Input() type: string = 'text';
  @Input() id = '';

  @Input() bindModelData: string;
  @Output() bindModelDataChange = new EventEmitter<string>();

  updateData(event: string): void {
    this.bindModelData = event;
    this.bindModelDataChange.emit(event);
  }
}
