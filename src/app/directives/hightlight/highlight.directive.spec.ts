import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { HighlightDirective } from './highlight.directive';

@Component({
  template: ` <div appHighlight="red">Highlight me</div>
    <h2 appHighlight>No Highlight</h2>`,
})
class TestComponent {}

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

  it('should apply highlight color to the element', () => {
    divElement = fixture.debugElement.query(By.css('div')).nativeElement;
    expect(divElement.style.borderColor).toBe('red');
  });

  it('should not apply highlight color if input is not provided', () => {
    newElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    fixture.detectChanges();
    expect(newElement.style.borderColor).toBeFalsy();
  });
});
