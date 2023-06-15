import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { HighlightDirective } from './highlight.directive';

@Component({
  template: ` <div [appHighlight]="today">Highlight me</div>
    <p [appHighlight]="futureDate">Highlight me</p>
    <h2 [appHighlight]="pastDate">No Highlight</h2>`,
})
class TestComponent {
  today: string = new Date().toString();
  futureDate: string = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toString();
  pastDate = new Date(new Date().getTime() - 20 * 24 * 60 * 60 * 1000).toString();
}

describe('HighlightDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let divElement: HTMLElement;
  let newElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should set border color to lightgreen if the date is within the last 14 days', () => {
    divElement = fixture.debugElement.query(By.css('div')).nativeElement;
    expect(divElement.style.borderColor).toBe('lightgreen');
  });

  it('should set border color to skyblue if the date is in the future', () => {
    divElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(divElement.style.borderColor).toBe('skyblue');
  });

  it('should set border color to lightgrey if the date is in the past and more than 14 days ago', () => {
    newElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    fixture.detectChanges();
    expect(newElement.style.borderColor).toBe('lightgrey');
  });
});
