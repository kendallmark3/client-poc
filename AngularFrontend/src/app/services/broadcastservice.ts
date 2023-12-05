import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class BroadcastService {
private messageSubject = new Subject<string>();
public message$ = this.messageSubject.asObservable();

constructor() {}

broadcastMessage(message: string): void {
this.messageSubject.next(message);
}
}