import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessagingService } from './modules/shared/services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  infoEnviroment = environment;

  constructor(private messagingService: MessagingService) {
    this.messagingService.requestPermission();
  }

  ngOnInit(): void {}
}
