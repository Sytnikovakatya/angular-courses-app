import { Component, OnInit } from '@angular/core';

import { AuthService } from '@services/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: string | null = '';
  authentificated = false;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authentificated = this.authService.isAuthenticated();
    this.user = this.authService.getUserInfo();
  }

  logout(): void {
    this.authService.logout();
    this.authentificated = !this.authentificated;
    window.location.reload();
  }
}
