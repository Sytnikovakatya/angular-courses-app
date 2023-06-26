import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') date: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }

  ngOnInit(): void {
    const daysOffset = 24 * 60 * 60 * 1000 * 14;
    const condition = Date.now() - daysOffset;
    const date = new Date(this.date).getTime();

    if (date < Date.now() && date >= condition) {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'lightgreen');
    } else if (date > Date.now()) {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'skyblue');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'lightgrey');
    }
  }
}
