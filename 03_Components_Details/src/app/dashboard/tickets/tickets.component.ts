import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from '../../models/ticketModel';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string, text: string }): void {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.floor(Math.random()).toString(),
      status: 'open'
    };
    this.tickets.push(ticket);
  }

  onClose(id: string): void {
    this.tickets = this.tickets.map((ticket: Ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' }
      }
      return ticket;
    })
  }
}
