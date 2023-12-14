import { Component } from '@angular/core';
import { BroadcastService } from '../services/broadcastservice';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

constructor(private broadcastService: BroadcastService) {}
message: string;

ngOnInit(): void {
  this.broadcastService.message$.subscribe((message: string) => {
  this.message = message;
  });
  this.broadcastService.broadcastMessage("Hello Vamshi from the Broadcast Service!");
}
}
