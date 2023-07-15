import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

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
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeaderComponent, MockLogoComponent, MockButtonComponent, IfAuthenticatedDirective],
      providers: [AuthService],
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to authentication changes', () => {
    authService.authentication.next(true);

    component.ngOnInit();

    expect(component.authenticated).toBe(true);
  });

  it('should unsubscribe from subscriptions on component destroy', () => {
    spyOn(component.subscription1$, 'unsubscribe');
    spyOn(component.subscription2$, 'unsubscribe');

    component.ngOnDestroy();

    expect(component.subscription1$.unsubscribe).toHaveBeenCalled();
    expect(component.subscription2$.unsubscribe).toHaveBeenCalled();
  });

  it('should call authService.logout() when logout() is called', () => {
    spyOn(authService, 'logout');

    component.logout();

    expect(authService.logout).toHaveBeenCalled();
  });
});
