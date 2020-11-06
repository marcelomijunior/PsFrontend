import { Component, OnInit } from '@angular/core';
import { MessagingService } from './modules/shared/services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private messagingService: MessagingService) {
    this.messagingService.requestPermission();
  }

  ngOnInit(): void {}
}
