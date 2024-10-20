import { Component, Input } from '@angular/core';
import { obj } from '../Models';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) detailsOfSelectedUser!: obj
}
