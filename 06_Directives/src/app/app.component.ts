import { Component } from '@angular/core';
import { LearningResourcesComponent } from "./learning-resources/learning-resources.component";
import { AuthComponent } from "./auth/auth.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LearningResourcesComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // private auth = inject(AuthService);                                                   // first way to inject the service 
  // constructor(private authService: AuthService) { }                                     // another way to inject the service
  isAdmin: boolean = false;

  // isAdmin = computed(() => this.authService.activePermission === "admin");             // this method can only be used with signals
  onCheckAdmin(event: any) {
    if (event == "admin")
      this.isAdmin = true;
  }
}