import { Injectable } from '@angular/core';
import { Permission } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  activePermission: Permission = "guest";

  authenticate(email: string, password: string): string {
    if (email === 'admin@example.com' && password === 'admin') {
      this.activePermission = 'admin';
    } else if (email === 'user@example.com' && password === 'user') {
      this.activePermission = 'user';
    } else {
      this.activePermission = 'guest';
    }
    return this.activePermission;
  }

  logout() {
    this.activePermission = 'guest';
  }
}

function signal<T>(arg0: string) {
  throw new Error('Function not implemented.');
}

