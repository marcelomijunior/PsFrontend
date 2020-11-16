import { Injectable } from '@angular/core';
import { PETSHOP, PETSHOPS } from '../constants/petshops';
import { AGENDAMENTO, AGENDAMENTOS } from '../constants/agendamentos';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  petshops = PETSHOPS;
  agendamentos = AGENDAMENTOS;

  constructor() {}

  list<T>(collection: Collections): T {
    return (this[collection] as unknown) as T;
  }

  add<T>(collection: Collections, content: T) {
    return ((this[collection] as unknown) as T[]).push(content);
  }
}

type Collections = 'petshops' | 'agendamentos';
