import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Input() disabled: boolean;

  @Output() btnClick = new EventEmitter<void>();

  public buttonText = '';

  onClick() {
    this.btnClick.emit();
  }
}
