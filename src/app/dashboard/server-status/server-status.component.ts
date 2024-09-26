import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = 'offline';
  // private interval? : ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() { 
    
  }

  ngOnInit(): void {
    const interval  = setInterval(() => {
      this.currentStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
