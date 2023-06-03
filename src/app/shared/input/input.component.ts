import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() class: string = 'form-control';
  @Input() type: string = 'search';

  @Input() bindModelData: string;
  @Output() bindModelDataChange = new EventEmitter<string>();

  updateData(event: string): void {
    this.bindModelData = event;
    this.bindModelDataChange.emit(event);
  }
}
