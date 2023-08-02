import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { DateInputComponent } from './date-input.component';

describe('DateInputComponent', () => {
  let component: DateInputComponent;
  let fixture: ComponentFixture<DateInputComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [DateInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DateInputComponent);
    component = fixture.componentInstance;
    inputElement = fixture.nativeElement.querySelector('input');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the value when input is changed', () => {
    const newValue = '2023-06-14';
    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));

    expect(component.value).toBe(newValue);
  });

  it('should call onInput when input is changed', () => {
    const onInput = spyOn(component, 'onInput');

    const newValue = '2023-06-14';
    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));

    expect(onInput).toHaveBeenCalled();
  });

  it('should write value when writeValue is called', () => {
    const newValue = '2023-06-14';
    component.writeValue(newValue);

    expect(component.value).toBe(newValue);
  });

  it('should validate the input control', () => {
    const validationErrors = component.validate();

    expect(validationErrors).toBeNull();
  });
});
