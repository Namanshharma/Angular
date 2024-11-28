import { AfterViewInit, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus: string = 'online';
  // private interval?: NodeJS.Timeout;
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() { }

  ngOnInit(): void {
    // const interval = setInterval(() => {
    //   const x = Math.random();
    //   this.currentStatus = x < 0.5 ? 'offline' : x < 0.9 ? 'online' : 'unknown'
    // }, 5000);

    // this.destroyRef.onDestroy(() => {
    //   clearInterval(interval);
    // })
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }

  ngAfterViewInit(): void {
    console.log("Ng after view Init");
  }
}