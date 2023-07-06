import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@services/authentication/auth.service';

import { User } from '@shared/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  authenticated = false;
  user: User;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isAuthentificated$.subscribe(authenticated => (this.authenticated = authenticated));
    this.authService.getUserInfo().subscribe(user => (this.user = user));
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
