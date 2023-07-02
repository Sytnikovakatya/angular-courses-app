import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  authenticated = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAuthentificated$.subscribe(authenticated => (this.authenticated = authenticated));
  }
}
