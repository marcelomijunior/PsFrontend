import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaModule } from '../shared/components/mapa/mapa.module';
import { BuscaMapaRoutingModule } from './busca-mapa-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BuscaMapaComponent } from './busca-mapa.component';



@NgModule({
  declarations: [
    BuscaMapaComponent
  ],
  imports: [
    CommonModule,
    MapaModule,
    SharedModule,
    BuscaMapaRoutingModule
  ]
})
export class BuscaMapaModule { }
