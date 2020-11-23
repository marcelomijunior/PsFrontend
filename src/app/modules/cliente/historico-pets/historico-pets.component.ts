import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PetService } from '../../shared/services/pet.service';

@Component({
  selector: 'app-historico-pets',
  templateUrl: './historico-pets.component.html',
  styleUrls: ['./historico-pets.component.scss']
})
export class HistoricoPetsComponent implements OnInit {
  
  iconPlus = faPlus;

  vacinasCachorro = [
    'Vacina V8',
    'Vacina V10',
    'Vacina anti-rábica',
    'Vacina leishmaniose',
    'Vacina tosse dos canis',
    'Vacina giárdia'
  ];

  vaccineDoses;
  expandedVaccines = []

  constructor(
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.vaccineDoses = {
      'Vacina V8': [
        {
          'nome': 'vacina 123',
          'data': '12/12/2019',
          'data_proxima': '12/12/2020'
        },
        {
          'nome': 'vacina 123',
          'data': '12/12/2019',
          'data_proxima': '12/12/2020'
        },
      ],
      'Vacina V10': [
        {
          'nome': 'vacina 123',
          'data': '12/12/2019',
          'data_proxima': '12/12/2020'
        },
        {
          'nome': 'vacina 123',
          'data': '12/12/2019',
          'data_proxima': '12/12/2020'
        },
      ],
      'Vacina leishmaniose': [
        {
          'nome': 'vacina 123',
          'data': '12/12/2019',
          'data_proxima': '12/12/2020'
        },
        {
          'nome': 'vacina 123',
          'data': '12/12/2019',
          'data_proxima': '12/12/2020'
        },
      ],
      'Vacina tosse dos canis': [
        {
          'nome': 'vacina 123',
          'data': '12/12/2019',
          'data_proxima': '12/12/2020'
        },
        {
          'nome': 'vacina 123',
          'data': '12/12/2019',
          'data_proxima': '12/12/2020'
        },
      ],
      'Vacina giárdia': [
        {
          'nome': 'vacina 123',
          'data': '12/12/2019',
          'data_proxima': '12/12/2020'
        },
        {
          'nome': 'vacina 123',
          'data': '12/12/2019',
          'data_proxima': '12/12/2020'
        },
      ],
    };



  }

  expandCollapse(typeVaccine: string){
    const indexVaccine = this.expandedVaccines.indexOf(typeVaccine);
    if (indexVaccine == -1) {
      this.expandedVaccines.push(typeVaccine);
    } else {
      this.expandedVaccines.splice(indexVaccine,1);
    }
  }

  verifyExpandVaccine(typeVaccine: string){
    const indexVaccine = this.expandedVaccines.indexOf(typeVaccine);
    if (indexVaccine == -1) {
      return false;
    } else {
      return true;
    }
  }

}
