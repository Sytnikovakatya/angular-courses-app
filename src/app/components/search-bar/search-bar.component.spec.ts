import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

@Component({
  selector: 'app-input',
  template: '<div>Mock Input Component</div>',
})
class MockInputComponent {
  @Input() placeholder: string;
  @Input() bindModelData: string;
}

@Component({
  selector: 'app-button',
  template: '<div>Mock Button Component</div>',
})
class MockButtonComponent {
  @Input() text: string;
  @Input() type: string;
  @Input() class: string;
  @Input() fontawesome: string;
}

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent, MockInputComponent, MockButtonComponent],
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchClick and print console.log with the searching value', () => {
    spyOn(console, 'log');
    component.search = 'hello';
    component.searchClick();
    expect(console.log).toHaveBeenCalledWith('hello');
  });
});
