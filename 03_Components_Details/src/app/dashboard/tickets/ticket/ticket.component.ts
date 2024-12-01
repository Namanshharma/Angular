import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from '../../../models/ticketModel';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})

export class TicketComponent {
  @Input({ required: true }) data !: Ticket;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  detailsCollapse: boolean = false;

  onToggleDetails() {
    this.detailsCollapse != this.detailsCollapse;
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
