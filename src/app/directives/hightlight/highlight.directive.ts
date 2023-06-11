import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') highlightColor: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }

  ngOnInit(): void {
    this.el.nativeElement.style.borderColor = this.highlightColor;
  }
}
