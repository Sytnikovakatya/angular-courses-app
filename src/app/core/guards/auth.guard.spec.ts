import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from '@services/authentication/auth.service';

import { authGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: boolean | UrlTree;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: AuthService }],
    });

    guard = TestBed.runInInjectionContext(authGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should redirect to login page when user is not authenticated', () => {
    const result = guard;

    expect(result).toEqual(router.parseUrl('/login'));
  });
});
