import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';
import { mergeMapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  constructor(private angularFireMessaging: AngularFireMessaging) {}

  requestPermission() {
    this.angularFireMessaging.requestPermission
      .pipe(mergeMapTo(this.angularFireMessaging.tokenChanges))
      .subscribe(
        (token) => {
          console.log('Permission granted!');
          console.log('Token received: ', token);
          this.listen();
        },
        (error) => {
          console.log('Unable to get the user notification');
          console.log(error);
        }
      );
  }

  listen() {
    this.angularFireMessaging.messages.subscribe((message) => {
      console.log('New message!');
      console.log(message);
    })
  }
}
