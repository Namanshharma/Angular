import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: string = 'online';

  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   const x = Math.random();
    //   this.currentStatus = x < 0.5 ? 'offline' : x > 0.5 && x < 0.9 ? 'online' : 'unknown'
    // }, 10000);
  }
}