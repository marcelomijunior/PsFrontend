import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgsPropaganda: Array<string>;

  constructor() { }

  ngAfterViewInit(){
    this.imgsPropaganda = ['https://ambienteamigo.com.br/wp-content/uploads/2016/11/Petshop_planeta-1024x681.png',
    'assets/imgs/cachorro.png',
    'https://ambienteamigo.com.br/wp-content/uploads/2016/11/Petshop_planeta-1024x681.png',
    'assets/imgs/cachorro.png',];
  }

  ngOnInit(): void {
  }



}
