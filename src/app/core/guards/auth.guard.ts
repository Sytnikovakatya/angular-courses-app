import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { Observable, catchError, map, of } from 'rxjs';

import { AuthService } from '@services/authentication/auth.service';

export function authGuard(): Observable<boolean | UrlTree> {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated.pipe(
    map(authenticated => {
      if (authenticated) {
        return true;
      }
      return router.parseUrl('/login');
    }),
    catchError(() => {
      router.parseUrl('/login');
      return of(false);
    })
  );
}
