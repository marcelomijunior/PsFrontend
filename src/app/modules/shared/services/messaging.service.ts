// import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';
import { mergeMapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const FIREBASE_MESSAGING_URL = 'https://fcm.googleapis.com/fcm/send';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  constructor(
    private angularFireMessaging: AngularFireMessaging,
    private http: HttpClient
  ) {}

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
    });
  }

  sendNotification(
    targetToken: string,
    { title, body, data }: { title: string; body: string; data: any }
  ) {
    this.http.post(
      FIREBASE_MESSAGING_URL,
      { title, body, data, to: targetToken },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `key=${environment.firebaseCloudMessagingToken}`,
        },
      }
    );
  }
}
