import { Component } from '@angular/core';

import { AuthService } from '@services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  validation = true;
  email = '';
  password = '';

  constructor(public authService: AuthService) {}

  login(email: string): void {
    this.authService.login(email);
    window.location.reload();
  }
}
