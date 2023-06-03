import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  @Component({
    selector: 'app-button',
    template: '<div>Mock Button Component</div>',
  })
  class MockButtonComponent {
    @Input() text: string;
    @Input() class: string;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderComponent, MockButtonComponent],
    });
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the load method and print console.log', () => {
    spyOn(console, 'log');
    component.load();
    expect(console.log).toHaveBeenCalledWith('Load more');
  });
});
