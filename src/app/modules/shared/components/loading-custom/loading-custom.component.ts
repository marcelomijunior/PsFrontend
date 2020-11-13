import { Component, OnInit } from '@angular/core';

import { LoadingCustomService } from './loading-custom.service';

@Component({
  selector: 'loading-custom',
  templateUrl: './loading-custom.component.html',
  styleUrls: ['./loading-custom.component.scss']
})
export class LoadingCustomComponent implements OnInit {

  points = '.';
  velocidade = 400;
  public timeout;

  constructor(
    public loadingCustomService: LoadingCustomService
  ) { }

  ngOnInit(): void {
    this.pointsAnimation();
  }

  pointsAnimation() {
    
    this.timeout = setTimeout(() => {
      if (this.points == '...') {
        this.points = '.';
      } else {
        this.points += '.';
      };
      if(this.loadingCustomService.showLoading){
        this.pointsAnimation();
      }
    }, this.velocidade);
  }


}
