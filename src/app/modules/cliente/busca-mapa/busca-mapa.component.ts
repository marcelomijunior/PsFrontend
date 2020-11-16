import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetShop } from '../../shared/models/petshop.model';

@Component({
  selector: 'app-busca-mapa',
  templateUrl: './busca-mapa.component.html',
  styleUrls: ['./busca-mapa.component.scss'],
})
export class BuscaMapaComponent implements OnInit {
  
  petshops: PetShop[] = [];
  typeService: string;
  address: string;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  ngAfterViewInit(){
  }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.typeService = params.typeService;
    });
    
    this.petshops = [
      {
        id: 0,
        img: 'assets/imgs/petshop.jpg',
        nome: 'Bicho Solto',
        endereco: '',
        long: 0,
        lat: 0,
      },
      {
        id: 1,
        img: 'assets/imgs/petshop.jpg',
        nome: 'Animaniacs',
        endereco: '',
        long: 0,
        lat: 0,
      },
      {
        id: 2,
        img: 'assets/imgs/petshop.jpg',
        nome: 'Animal Meu',
        endereco: '',
        long: 0,
        lat: 0,
      },
      {
        id: 3,
        img: 'assets/imgs/petshop.jpg',
        nome: 'Madagascar',
        endereco: '',
        long: 0,
        lat: 0,
      },
      {
        id: 4,
        img: 'assets/imgs/petshop.jpg',
        nome: 'Pet & Cia',
        endereco: '',
        long: 0,
        lat: 0,
      },
      {
        id: 5,
        img: 'assets/imgs/petshop.jpg',
        nome: 'Petshop Bicho Lindo',
        endereco: '',
        long: 0,
        lat: 0,
      },
    ];
  }

  setAddress(event){
    this.address = event;
    console.log(event);
    
  }
  
  onService(petshop: PetShop){
    this.router.navigate(['/cliente/agenda/solicitar-servico/' + petshop.id], 
    { 
      queryParams: {
        typeService: this.typeService, 
        address: this.address
      }
    })
  }


}
