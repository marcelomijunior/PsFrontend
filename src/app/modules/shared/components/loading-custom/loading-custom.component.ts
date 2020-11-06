import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoadingCustomService } from './loading-custom.service';

@Component({
  selector: 'loading-custom',
  templateUrl: './loading-custom.component.html',
  styleUrls: ['./loading-custom.component.scss']
})
export class LoadingCustomComponent implements OnInit {

  points = '.';
  velocidade = 400;
  timeout;

  constructor(
    public loadingCustomService: LoadingCustomService
  ) { }

  ngOnInit(): void {
    this.pointsAnimation();
  }

  pointsAnimation() {
    
    this.timeout = setInterval(() => {
      if (this.points == '...') {
        this.points = '.';
      } else {
        this.points += '.';
      }
    }, this.velocidade);
  }


}
