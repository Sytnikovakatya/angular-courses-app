import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) {}

  login(email: string): void {
    this.authService.login(email);
    this.router.navigate(['/courses']);
  }
}
