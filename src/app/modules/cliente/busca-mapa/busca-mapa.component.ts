import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetShop } from '../../shared/models/petshop.model';
import { DatabaseService } from '../../shared/services/database.service';

@Component({
  selector: 'app-busca-mapa',
  templateUrl: './busca-mapa.component.html',
  styleUrls: ['./busca-mapa.component.scss'],
})
export class BuscaMapaComponent implements OnInit {

  petshops: PetShop[] = [];

  constructor(private router: Router, private database: DatabaseService) {}

  ngAfterViewInit(){
  }

  ngOnInit(): void {
    this.petshops = this.database.list<PetShop[]>('petshops');
  }

  onService(petshop: PetShop){
    this.router.navigate(['/cliente/agenda/solicitar-servico/' + petshop.id])
  }

}
