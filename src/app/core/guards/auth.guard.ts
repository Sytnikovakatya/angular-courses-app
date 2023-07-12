import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { AuthService } from '@services/authentication/auth.service';

export function authGuard(): boolean | UrlTree {
  let authenticated = false;
  const authService = inject(AuthService);
  const router = inject(Router);

  authService.isAuthenticated.subscribe(auth => (authenticated = auth));

  if (authenticated) {
    return true;
  }
  return router.parseUrl('/login');
}
