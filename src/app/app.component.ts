import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@shared/interfaces/user.interface';

import { AuthService } from '@services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user?: User | null;

  constructor(private authService: AuthService, public http: HttpClient) {
    this.authService.user.subscribe(user => (this.user = user));
  }
}
