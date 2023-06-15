import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') date: number;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }

  ngOnInit(): void {
    const daysOffset = 24 * 60 * 60 * 1000 * 14;
    const condition = Date.now() - daysOffset;

    if (this.date < Date.now() && this.date >= condition) {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'lightgreen');
    } else if (this.date > Date.now()) {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'skyblue');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'lightgrey');
    }
  }
}
