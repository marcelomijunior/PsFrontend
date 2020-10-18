import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { HomeComponent } from './home/home.component';
import { BuscaMapaComponent } from './busca-mapa/busca-mapa.component';
import { MapaModule } from '../shared/components/mapa/mapa.module';


@NgModule({
  declarations: [HomeComponent, BuscaMapaComponent],
  imports: [
    CommonModule,
    MapaModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
