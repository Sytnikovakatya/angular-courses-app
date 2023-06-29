import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from '@services/authentication/auth.service';
import { Observable, of } from 'rxjs';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, AuthService],
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should allow navigation when user is authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    const routeSnapshot: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    const stateSnapshot: RouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', [
      'toString',
    ]);
    const result = guard.canActivate(routeSnapshot, stateSnapshot);
    expect(result).toBeTrue();
  });

  it('should navigate to login page and deny navigation when user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    const routeSnapshot: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    const stateSnapshot: RouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', [
      'toString',
    ]);
    const navigateSpy = spyOn(router, 'navigate');
    const result = guard.canActivate(routeSnapshot, stateSnapshot);
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
    expect(result).toBeFalse();
  });
});
