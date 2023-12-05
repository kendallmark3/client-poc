Sure! Here's an example of an Angular service that uses RxJS Subjects to broadcast messages to subscribed components:

```typescript
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
```

In the above service, we create a `messageSubject` of type `Subject<string>`. The `message$` variable is an observable created from the `messageSubject`, which components can subscribe to.

The `broadcastMessage()` method takes a message as an argument and emits it as the next value through the `messageSubject`.

To subscribe to this service and receive messages in a component, you can follow these steps:

1. Import the `BroadcastService` in your component:

```typescript
import { Component, OnInit } from '@angular/core';
import { BroadcastService } from 'path-to/broadcast.service';

@Component({
selector: 'app-my-component',
template: `
<p>{{ message }}</p>
`
})
export class MyComponent implements OnInit {
message: string;

constructor(private broadcastService: BroadcastService) {}

ngOnInit(): void {
this.broadcastService.message$.subscribe((message: string) => {
this.message = message;
});
}
}
```

2. Inject `BroadcastService` into your component's constructor.
3. In the `ngOnInit()` method, subscribe to the `message$` observable of the `BroadcastService` and store the received message value in a component property (`message` in this example). You can update your component template to display this message as needed.

By calling the `broadcastMessage()` method from the `BroadcastService` with a message, all subscribed components will receive and react to that message.

Remember to provide the `BroadcastService` in the root module or the specific module where you want to use it, depending on your application's architecture.

This is a basic example, and you can extend it further based on your requirements, such as adding error handling or additional data to be broadcasted.