import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the button text correctly', () => {
    const buttonText = 'Click Me';
    component.text = buttonText;
    expect(component.name).toBe(buttonText);
  });

  it('should set default class and type if not provided', fakeAsync(() => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
    tick();

    expect(buttonElement.getAttribute('class')).toBe('btn btn-primary');
    expect(buttonElement.getAttribute('type')).toBe('button');
  }));

  it('should set custom class if provided', fakeAsync(() => {
    component.class = 'custom-class';
    fixture.detectChanges();
    tick();

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.getAttribute('class')).toBe('custom-class');
  }));

  it('should call the onClick method when the button is clicked', () => {
    spyOn(component, 'onClick');
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonElement.dispatchEvent(new Event('click'));
    expect(component.onClick).toHaveBeenCalled();
  });

  it('should emit event when clicked', () => {
    let clicked = false;
    component.btnClick.subscribe(() => {
      clicked = true;
    });

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonElement.click();
    expect(clicked).toBe(true);
  });
});
