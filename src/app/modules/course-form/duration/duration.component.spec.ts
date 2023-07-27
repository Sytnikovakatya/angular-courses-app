import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { DurationPipe } from '@pipes/duration/duration.pipe';

import { DurationComponent } from './duration.component';

describe('DurationComponent', () => {
  let component: DurationComponent;
  let fixture: ComponentFixture<DurationComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DurationComponent, DurationPipe],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(DurationComponent);
    component = fixture.componentInstance;
    inputElement = fixture.nativeElement.querySelector('input');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the value when input is changed', () => {
    const newValue = '60';
    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));

    expect(component.value).toBe(newValue);
  });

  it('should validate the input control', () => {
    const validationErrors = component.validate();

    expect(validationErrors).toBeNull();
  });

  it('should call onInput when input is changed', () => {
    const onInput = spyOn(component, 'onInput');

    const newValue = '120';
    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));

    expect(onInput).toHaveBeenCalled();
  });

  it('should write value when writeValue is called', () => {
    const newValue = '90';
    component.writeValue(newValue);

    expect(component.value).toBe(newValue);
  });

  it('should validate the input control', () => {
    const validationErrors = component.validate();

    expect(validationErrors).toBeNull();
  });
});
