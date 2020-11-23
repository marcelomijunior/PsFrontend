import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPaw, faVenusMars, faBirthdayCake, faWeightHanging } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detalhe-pet',
  templateUrl: './detalhe-pet.component.html',
  styleUrls: ['./detalhe-pet.component.scss']
})
export class DetalhePetComponent implements OnInit {
  faPaw = faPaw;
  faVenusMars = faVenusMars;
  faBirthdayCake = faBirthdayCake;
  faWeightHanging = faWeightHanging;
  idPet = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.idPet = params.id;
    })
    
  }

  abrirDetalhes(tipeService: string) {
    this.router.navigate([`/cliente/meus-pets/${this.idPet}/historico/${tipeService}`]);
  }

}
