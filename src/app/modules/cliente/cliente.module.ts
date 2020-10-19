import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { HomeComponent } from './home/home.component';
import { BuscaMapaComponent } from './busca-mapa/busca-mapa.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SharedModule } from './../shared/shared.module';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  declarations: [HomeComponent, BuscaMapaComponent, CadastroComponent, PerfilComponent, PetsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
