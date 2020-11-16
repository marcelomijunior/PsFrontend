import { Injectable } from '@angular/core';
import { PETSHOPS } from '../constants/petshops';
import { AGENDAMENTOS } from '../constants/agendamentos';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  petshops = PETSHOPS;
  agendamentos = AGENDAMENTOS;

  constructor() {
    const data = localStorage.getItem('database');

    if (data) {
      const { petshops, agendamentos } = JSON.parse(data);
      this.petshops = petshops;
      this.agendamentos = agendamentos;
    }
  }

  list<T>(collection: Collections): T {
    return (this[collection] as unknown) as T;
  }

  add<T>(collection: Collections, content: T) {
    ((this[collection] as unknown) as T[]).unshift(content);
    this.updateDatabase();
  }

  updateDatabase() {
    localStorage.setItem(
      'database',
      JSON.stringify({
        petshops: this.petshops,
        agendamentos: this.agendamentos,
      })
    );
  }
}

type Collections = 'petshops' | 'agendamentos';
