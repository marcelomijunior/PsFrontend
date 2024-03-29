import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetShop } from '../../shared/models/petshop.model';
import { DatabaseService } from '../../shared/services/database.service';

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
    private database: DatabaseService
    ) {}

  ngAfterViewInit(){
  }

  ngOnInit(): void {
    this.petshops = this.database.list<PetShop[]>('petshops');

    this.route.queryParams.subscribe(params => {
      this.typeService = params.typeService;
    });
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
