import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  set text(name: string) {
    this.buttonText = name;
  }

  get name(): string {
    return this.buttonText;
  }

  @Input() class: string = 'btn btn-primary';
  @Input() type: string = 'button';
  @Input() fontawesome: string;

  @Output() btnClick = new EventEmitter();

  public buttonText = '';

  onClick() {
    this.btnClick.emit();
  }
}
