import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-mapa',
  templateUrl: './busca-mapa.component.html',
  styleUrls: ['./busca-mapa.component.scss']
})
export class BuscaMapaComponent implements OnInit {
  petshops = []
  constructor() { }

  ngOnInit(): void {
    this.petshops = [
      {
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop Didi',
        servicos: 'Serviços e Produtos'
      },
      {
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Genin',
        servicos: 'Somente Produtos'
      },
      {
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Celão',
        servicos: 'Somente Serviços'
      },
      {
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Celão',
        servicos: 'Somente Serviços'
      },
      {
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Celão',
        servicos: 'Somente Serviços'
      },
      {
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Celão',
        servicos: 'Somente Serviços'
      },
    ]
  }

}
