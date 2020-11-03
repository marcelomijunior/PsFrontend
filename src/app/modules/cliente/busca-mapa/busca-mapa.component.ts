import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetShop } from '../../shared/models/petshop.model';

@Component({
  selector: 'app-busca-mapa',
  templateUrl: './busca-mapa.component.html',
  styleUrls: ['./busca-mapa.component.scss'],
})
export class BuscaMapaComponent implements OnInit {
  
  petshops: PetShop[] = [];
  
  constructor(private router: Router) {}

  ngAfterViewInit(){
  }

  ngOnInit(): void {
    this.petshops = [
      {
        id: 0,
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop Didi',
        endereco: 'Rua A, 123 - Barreiro, Bh - MG',
        long: -44.0390646,
        lat: -20.0089027,
      },
      {
        id: 1,
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Genin',
        endereco: 'Rua A, 123 - Barreiro, Bh - MG',
        long: -44.0350645,
        lat: -20.0109027,
      },
      {
        id: 2,
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Celão',
        endereco: 'Rua A, 123 - Barreiro, Bh - MG',
        long: -44.0380645,
        lat: -20.0109027,
      },
      {
        id: 3,
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Celão',
        endereco: 'Rua A, 123 - Barreiro, Bh - MG',
        long: -44.0430645,
        lat: -20.0109027,
      },
      {
        id: 4,
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Celão',
        endereco: 'Rua A, 123 - Barreiro, Bh - MG',
        long: -44.0410645,
        lat: -20.0149027,
      },
      {
        id: 5,
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop do Celão',
        endereco: 'Rua A, 123 - Barreiro, Bh - MG',
        long: -44.0400645,
        lat: -20.0169027,
      },
    ];
  }

  onService(petshop: PetShop){
    this.router.navigate(['/cliente/agenda/solicitar-servico/' + petshop.id])
  }

}
