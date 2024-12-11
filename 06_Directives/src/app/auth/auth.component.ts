import { Component, inject, signal } from '@angular/core';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.authenticate(this.email, this.password);
  }
}
