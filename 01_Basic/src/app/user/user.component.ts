import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummyUsers';
import { obj } from '../Models';

const index = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // index: number = index <= 0 ? 1 : index;
  // selectedUser: userType = DUMMY_USERS[index];

  @Input({ required: true }) index!: number;
  @Input({ required: true }) user !: obj;
  @Output() select: EventEmitter<obj> = new EventEmitter<obj>();

  onSelectUser(): void {
    // const index = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.index = index;
    // this.selectedUser = DUMMY_USERS[index];

    this.select.emit({ name: this.user.name, id: this.user.id });
  }
}

