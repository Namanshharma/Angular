import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummyUsers';
import { obj, userType } from './Models';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
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
