import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummyUsers';
import { obj } from '../Models';

const index = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({ required: true }) index!: number;
  @Input({ required: true }) user !: obj;
  // @Input({ required: true }) selected?: boolean = false;
  @Output() select: EventEmitter<obj> = new EventEmitter<obj>();

  onSelectUser(): void {
    this.select.emit({ name: this.user.name, id: this.user.id });
  }
}

