import { Component, OnInit } from '@angular/core';

export type PetShop = {
  img: string;
  nome: string;
  servicos: string;
  long: number;
  lat: number;
};

@Component({
  selector: 'app-busca-mapa',
  templateUrl: './busca-mapa.component.html',
  styleUrls: ['./busca-mapa.component.scss'],
})
export class BuscaMapaComponent implements OnInit {
  petshops: PetShop[] = [];
  constructor() {}

  ngOnInit(): void {
    this.petshops = [
      {
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop Didi',
        servicos: 'Serviços e Produtos',
        long: -44.0390646,
        lat: -20.0089027,
      },
      {
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Genin',
        servicos: 'Somente Produtos',
        long: -44.0350645,
        lat: -20.0109027,
      },
      {
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Celão',
        servicos: 'Somente Serviços',
        long: -44.0380645,
        lat: -20.0109027,
      },
      {
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Celão',
        servicos: 'Somente Serviços',
        long: -44.0430645,
        lat: -20.0109027,
      },
      {
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Celão',
        servicos: 'Somente Serviços',
        long: -44.0410645,
        lat: -20.0149027,
      },
      {
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Celão',
        servicos: 'Somente Serviços',
        long: -44.0400645,
        lat: -20.0169027,
      },
    ];
  }
}
