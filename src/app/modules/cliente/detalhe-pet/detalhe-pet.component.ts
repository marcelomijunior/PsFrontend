import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
