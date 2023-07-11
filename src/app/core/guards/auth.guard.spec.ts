import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from '@services/authentication/auth.service';
import { authGuard } from './auth.guard';

describe('AuthGuard', () => {
  //let guard: typeof authGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [authGuard, AuthService],
    });
    //guard = TestBed.inject(authGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should return true if the user is authenticated', () => {
    // Arrange
    spyOn(authService, 'isAuthenticated');

    // Act
    const result = authGuard();

    // Assert
    expect(result).toBe(true);
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('should navigate to the login page if the user is not authenticated', () => {
    // Arrange
    spyOn(authService, 'isAuthenticated');
    spyOn(router, 'parseUrl');

    // Act
    const result = authGuard();

    // Assert
    expect(result).toBeInstanceOf(UrlTree);
    expect(router.parseUrl).toHaveBeenCalledWith('/login');
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});
