import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { AuthService } from '@services/authentication/auth.service';

export function authGuard(): boolean | UrlTree {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  return router.parseUrl('/login');
}
