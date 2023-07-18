import { Component } from '@angular/core';

import { AuthService } from '@services/authentication/auth.service';

import { Token } from '@shared/interfaces/token.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  validation = true;
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login(): void {
    const credentials = {
      login: this.email,
      password: this.password,
    };
    this.authService.login(credentials).subscribe(() => {
      this.authService.getUserInfo().subscribe();
    });
  }
}
