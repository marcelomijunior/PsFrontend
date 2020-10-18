import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { HomeComponent } from './home/home.component';
import { BuscaMapaComponent } from './busca-mapa/busca-mapa.component';
import { MapaModule } from '../shared/components/mapa/mapa.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [HomeComponent, BuscaMapaComponent, CadastroComponent, PerfilComponent],
  imports: [
    CommonModule,
    MapaModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
