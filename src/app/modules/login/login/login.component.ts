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

  login(): void {
    const credentials = {
      login: this.email,
      password: this.password,
    };
    this.authService.login(credentials).subscribe(response => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('authenticated', 'true');

      this.authService.getUserInfo().subscribe();
      this.router.navigate(['/courses']);
    });
  }
}
