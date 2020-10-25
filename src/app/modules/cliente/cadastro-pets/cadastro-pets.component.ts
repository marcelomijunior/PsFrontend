import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../../shared/services/pet.service';

@Component({
  selector: 'app-cadastro-pets',
  templateUrl: './cadastro-pets.component.html',
  styleUrls: ['./cadastro-pets.component.scss'],
})
export class CadastroPetsComponent implements OnInit {
  racasCachorro = [];
  racasGato = [];

  constructor(private router: Router, petService: PetService) {
    this.racasCachorro = petService.getRacasCachorros();
    this.racasGato = petService.getRacasGatos();
  }

  ngOnInit(): void {}

  getRacaPorTipo(tipo: 'Cachorro' | 'Gato'): string[] {
    return this[`racas${tipo}`];
  }

  criarPet() {
    this.router.navigate(['/cliente/meus-pets']);
  }
}
