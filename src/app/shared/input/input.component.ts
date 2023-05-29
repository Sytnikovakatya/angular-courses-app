import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnChanges, OnInit {
  @Input() search: string = '';

  @Input() placeholder: string = '';
  @Input() class: string = 'form-control';
  @Input() type: string = 'search';

  @Input() bindModelData: unknown;
  @Output() bindModelDataChange = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  updateData(event: Event) {
    this.bindModelData = event;
    this.bindModelDataChange.emit(event);
  }

  ngOnInit() {
    console.log('Init');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
