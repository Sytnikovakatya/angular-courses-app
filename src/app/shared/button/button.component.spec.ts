import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the button text correctly', () => {
    const buttonText = 'Click Me';
    component.text = buttonText;
    expect(component.name).toBe(buttonText);
  });

  it('should set default class and type if not provided', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.getAttribute('class')).toBe('btn btn-primary');
    expect(buttonElement.getAttribute('type')).toBe('button');
  });

  it('should set custom class if provided', () => {
    component.class = 'custom-class';
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.getAttribute('class')).toBe('custom-class');
  });

  it('should call the onClick method when the button is clicked', () => {
    spyOn(component, 'onClick');
    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.dispatchEvent(new Event('click'));
    expect(component.onClick).toHaveBeenCalled();
  });

  it('should emit event when clicked', () => {
    let clicked = false;
    component.btnClick.subscribe(() => {
      clicked = true;
    });

    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    expect(clicked).toBe(true);
  });
});
