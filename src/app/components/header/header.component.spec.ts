import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfAuthenticatedDirective } from '@directives/ifAuthenticated/if-authenticated.directive';

import { AuthService } from '@services/authentication/auth.service';

import { HeaderComponent } from './header.component';

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

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    const authServiceMock = jasmine.createSpyObj('AuthService', ['isAuthenticated', 'getUserInfo', 'logout']);

    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, MockLogoComponent, MockButtonComponent, IfAuthenticatedDirective],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    }).compileComponents();

    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize authenticated and user properties on ngOnInit', () => {
    authServiceSpy.isAuthenticated.and.returnValue(true);
    authServiceSpy.getUserInfo.and.returnValue('testuser');

    component.ngOnInit();

    expect(authServiceSpy.isAuthenticated).toHaveBeenCalled();
    expect(authServiceSpy.getUserInfo).toHaveBeenCalled();
    expect(component.authentificated).toBeTrue();
    expect(component.user).toBe('testuser');
  });
});
