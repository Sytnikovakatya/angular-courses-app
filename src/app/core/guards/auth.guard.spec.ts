import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Observable, of } from 'rxjs';

import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { AuthService } from '@services/authentication/auth.service';

import { authGuard } from './auth.guard';

const mockAuthService = {
  get isAuthenticated() {
    return of(false);
  },
};

describe('AuthGuard', () => {
  let guard: Observable<boolean | UrlTree>;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, StoreModule.forRoot(provideMockStore)],
      providers: [{ provide: AuthService, useValue: mockAuthService }],
    });

    guard = TestBed.runInInjectionContext(authGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should redirect to login page when user is not authenticated', done => {
    const result$ = guard;

    result$.subscribe(result => {
      expect(result).toEqual(router.parseUrl('/login'));
    });
    done();
  });

  it('should allow access if the user is authenticated', done => {
    const result$ = guard;
    spyOnProperty(mockAuthService, 'isAuthenticated', 'get').and.returnValue(of(false));

    result$.subscribe(result => {
      expect(result).toBeTruthy();
    });
    done();
  });
});
