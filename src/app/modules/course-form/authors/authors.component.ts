import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  @Input() class: string = 'form-control';
  @Input() bindModelData: string;
  @Output() bindModelDataChange = new EventEmitter<string>();

  updateData(event: string): void {
    this.bindModelData = event;
    this.bindModelDataChange.emit(event);
  }
}
