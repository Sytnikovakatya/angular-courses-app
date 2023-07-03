import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  @Output() newLoadEvent = new EventEmitter();

  load() {
    this.newLoadEvent.emit();
  }
}
