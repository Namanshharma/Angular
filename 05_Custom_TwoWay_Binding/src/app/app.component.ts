import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RectComponent } from "./rect/rect.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '05_Custom_TwoWay_Binding';
  rectSize = {
    width: '100',
    height: '100',
  };
}
