import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LearningResourcesComponent } from "./learning-resources/learning-resources.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LearningResourcesComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnChanges {
  // private auth = inject(AuthService);                                                   // first way to inject the service 
  isAdmin: boolean = false;
  constructor(private authService: AuthService) { }                                     // another way to inject the service
  ngOnChanges(changes: SimpleChanges): void {
    if (this.authService.activePermission === "admin")
      this.isAdmin = true;
    console.log(this.isAdmin);
    console.log(changes);
  }

  // isAdmin = computed(() => this.authService.activePermission === "admin");
  // ngOnInit(): void {
  //   if (this.authService.activePermission === "admin")
  //     this.isAdmin = true;
  //   console.log(this.isAdmin);
  // }
}