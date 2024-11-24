import { Component } from '@angular/core';

// there are different types of selector are present ( attribute selector ( [appButton] ) , element selector (app-button or button) there are the example of element selector)
// also we can combine both of these selectors as well.
@Component({
  selector: 'button[appButton] , a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
