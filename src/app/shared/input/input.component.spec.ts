import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input element with correct attributes', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement).toBeTruthy();
    expect(inputElement.getAttribute('class')).toContain('form-control');
    expect(inputElement.getAttribute('type')).toBe('search');
    expect(inputElement.getAttribute('placeholder')).toBe('');
  });

  it('should set custom placeholde if provided', () => {
    component.placeholder = 'custom-placeholder';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(buttonElement.getAttribute('placeholder')).toBe('custom-placeholder');
  });

  it('should emit event and update model data on input change', () => {
    const newInputValue = 'New Value';

    let emittedValue: string | undefined;
    component.bindModelDataChange.subscribe(value => {
      emittedValue = value;
    });

    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = newInputValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.bindModelData).toBe(newInputValue);
    expect(emittedValue).toBe(newInputValue);
  });
});
