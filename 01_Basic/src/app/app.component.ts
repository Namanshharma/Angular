import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummyUsers';
import { obj, userType } from './Models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  Users: userType[] = DUMMY_USERS;
  selectedUser!: obj;

  onSelectionOfUser(event: obj): void {
    this.selectedUser = event;
  }
}
