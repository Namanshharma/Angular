import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifeCycleComponent } from "./Components/life-cycle/life-cycle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LifeCycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '04_Components_LifeCycle';
  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }
}
