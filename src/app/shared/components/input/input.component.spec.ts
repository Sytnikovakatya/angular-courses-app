import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    inputElement = fixture.nativeElement.querySelector('input');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input element with correct attributes', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement).toBeTruthy();
    expect(inputElement.getAttribute('class')).toContain('form-control');
    expect(inputElement.getAttribute('type')).toBe('text');
    expect(inputElement.getAttribute('placeholder')).toBe('');
  });

  it('should update the value when input is changed', () => {
    const newValue = 'new value';
    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));

    expect(component.value).toBe(newValue);
  });

  it('should call onInput when input is changed', () => {
    const onInput = spyOn(component, 'onInput');

    const newValue = 'new value';
    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));

    expect(onInput).toHaveBeenCalled();
  });

  it('should write value when writeValue is called', () => {
    const newValue = 'new value';
    component.writeValue(newValue);

    expect(component.value).toBe(newValue);
  });

  it('should set valid  classes based on input', () => {
    expect(inputElement.classList.contains('is-valid')).toBeFalsy();

    component.valid = false;
    fixture.detectChanges();

    expect(inputElement.classList.contains('is-valid')).toBeFalsy();
  });

  it('should validate the input control', () => {
    const validationErrors = component.validate();

    expect(validationErrors).toBeNull();
  });
});
