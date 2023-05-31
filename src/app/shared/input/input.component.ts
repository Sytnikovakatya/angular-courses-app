import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnChanges {
  @Input() placeholder: string = '';
  @Input() class: string = 'form-control';
  @Input() type: string = 'search';

  @Input() bindModelData: unknown;
  @Output() bindModelDataChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  updateData(event: string) {
    this.bindModelData = event;
    this.bindModelDataChange.emit(event);
  }
}
