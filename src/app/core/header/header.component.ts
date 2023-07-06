import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@shared/interfaces/user.interface';

import { AuthService } from '@services/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  authenticated = false;
  user?: User | null;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.user.subscribe(user => (this.user = user));
  }

  logout(): void {
    this.authService.logout();
  }
}
