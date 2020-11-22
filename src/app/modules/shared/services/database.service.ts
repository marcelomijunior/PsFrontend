import { Injectable } from '@angular/core';
import { PETSHOP, PETSHOPS } from '../constants/petshops';
import { AGENDAMENTO, AGENDAMENTOS } from '../constants/agendamentos';

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

    this.updateDatabase();
  }

  list<T>(collection: Collections): T {
    return (this[collection] as unknown) as T;
  }

  add<T>(collection: Collections, content: T) {
    ((this[collection] as unknown) as T[]).unshift(content);
    this.updateDatabase();
  }

  update<T extends CollectionTypes>(collection: Collections, content: T) {
    const toBeUpdated = ((this[collection] as unknown) as T[]).findIndex(e => e.id === content.id);

    if (toBeUpdated === -1) return false;

    const changes = this[collection][toBeUpdated] = { ...content };
    this.updateDatabase();
    return changes;
  }

  patch<T extends CollectionTypes>(collection: Collections, id: number, content: Partial<T>) {
    const toBeUpdated = ((this[collection] as unknown) as T[]).findIndex(e => e.id === id);

    if (toBeUpdated === -1) return false;

    const changes = this[collection][toBeUpdated] = { ...this[collection][toBeUpdated], ...content };
    this.updateDatabase();
    return changes;
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
type CollectionTypes = PETSHOP | AGENDAMENTO;
