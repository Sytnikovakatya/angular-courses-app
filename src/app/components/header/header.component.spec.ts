import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  @Component({
    selector: 'app-logo',
    template: '<div class="logo">Mock Logo Component</div>',
  })
  class MockLogoComponent {}
  @Component({
    selector: 'app-button',
    template: '<div>Mock Button Component</div>',
  })
  class MockButtonComponent {
    @Input() text: string;
    @Input() fontawesome: string;
    @Input() class: string;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, MockLogoComponent, MockButtonComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.logo')?.textContent).toContain('Logo');
  });

  it('should have username', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.user-login')?.textContent).toContain('User login');
  });
});
