import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgsPropaganda: Array<string>;
  imgsCarregadas = false;

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit(){
    this.imgsPropaganda = ['https://ambienteamigo.com.br/wp-content/uploads/2016/11/Petshop_planeta-1024x681.png',
    'assets/imgs/cachorro.png',
    'https://ambienteamigo.com.br/wp-content/uploads/2016/11/Petshop_planeta-1024x681.png',
    'assets/imgs/cachorro.png',];
    setTimeout(() => {
      this.imgsCarregadas = true;      
    }, 500);
  }

  ngOnInit(): void {
  }

  foundService(typeService: string){
    this.router.navigate(['/cliente/busca/' + typeService]);
  }



}
