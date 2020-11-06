import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'loading-custom',
  templateUrl: './loading-custom.component.html',
  styleUrls: ['./loading-custom.component.scss']
})
export class LoadingCustomComponent implements OnInit {

  points = '.';
  velocidade = 400;
  timeout;
  loadingText = environment.loadingText;

  constructor() { }

  ngOnInit(): void {
    this.pointsAnimation();
  }

  pointsAnimation() {
    if (!this.loadingText || this.loadingText === '') {
      this.loadingText = 'Carregando';
    }
    this.timeout = setInterval(() => {
      if (this.points == '...') {
        this.points = '.';
      } else {
        this.points += '.';
      }
    }, this.velocidade);
  }


}
