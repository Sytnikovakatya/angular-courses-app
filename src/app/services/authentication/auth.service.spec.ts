import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthService] });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should store user info and set authentication status to true', () => {
      const userEmail = 'test@example.com';

      service.login(userEmail);

      expect(localStorage.getItem('name')).toBe(userEmail);
      expect(localStorage.getItem('authenticated')).toBe('true');
    });

    it('should emit authentication event', () => {
      const userEmail = 'test@example.com';
      let emittedValue: boolean | undefined;

      service.event$.subscribe(value => {
        emittedValue = value;
      });

      service.login(userEmail);

      expect(emittedValue).toBe(true);
    });

    it('should display an alert if userEmail is empty', () => {
      spyOn(window, 'alert');
      const userEmail = '';

      service.login(userEmail);

      expect(window.alert).toHaveBeenCalledWith('Please, enter your email and password');
    });
  });

  describe('logout', () => {
    it('should remove user info and set authentication status to false', () => {
      localStorage.setItem('name', 'test@example.com');
      localStorage.setItem('authenticated', 'true');

      service.logout();

      expect(localStorage.getItem('name')).toBeNull();
      expect(localStorage.getItem('authenticated')).toBe('false');
    });

    it('should emit authentication event', () => {
      let emittedValue: boolean | undefined;

      service.event$.subscribe(value => {
        emittedValue = value;
      });

      service.logout();

      expect(emittedValue).toBe(false);
    });
  });

  describe('isAuthenticated', () => {
    it('should return true if authenticated is true in local storage', () => {
      localStorage.setItem('authenticated', 'true');

      const result = service.isAuthenticated();

      expect(result).toBe(true);
    });

    it('should return false if authenticated is false in local storage', () => {
      localStorage.setItem('authenticated', 'false');

      const result = service.isAuthenticated();

      expect(result).toBe(false);
    });
  });

  describe('getUserInfo', () => {
    it('should return the user info from local storage', () => {
      const userEmail = 'test@example.com';
      localStorage.setItem('name', userEmail);

      const result = service.getUserInfo();

      expect(result).toBe(userEmail);
    });

    it('should return null if user info is not available in local storage', () => {
      localStorage.removeItem('name');

      const result = service.getUserInfo();

      expect(result).toBeNull();
    });
  });
});
