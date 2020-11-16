import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bestRating: Array<string>;
  bestPrice: Array<string>;
  imgsCarregadas = false;

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit(){
    this.bestRating = [
      'assets/imgs/petshop2.jpg',
      'assets/imgs/petshop3.jpg',
      'assets/imgs/petshop1.jpg',
      'assets/imgs/petshop4.jpg',
    ];
    this.bestPrice = [
    'assets/imgs/promocao1.jpeg',
    'assets/imgs/promocao2.jpeg',
    'assets/imgs/promocao3.jpg',
    'assets/imgs/promocao4.jpeg',
    ];
    setTimeout(() => {
      this.imgsCarregadas = true;      
    }, 500);
  }

  ngOnInit(): void {
  }

  foundService(typeService: string){
    this.router.navigate(['/cliente/busca/'], {queryParams: {typeService}});
  }



}
