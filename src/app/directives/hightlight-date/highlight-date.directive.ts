import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightDate]',
})
export class HighlightDateDirective implements OnInit {
  @Input('appHighlightDate') highlightColor: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.borderColor = this.highlightColor;
  }
}
