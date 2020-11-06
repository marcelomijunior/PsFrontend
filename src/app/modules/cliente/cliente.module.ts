import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { HomeComponent } from './home/home.component';
import { BuscaMapaComponent } from './busca-mapa/busca-mapa.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SharedModule } from './../shared/shared.module';
import { PetsComponent } from './pets/pets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroPetsComponent } from './cadastro-pets/cadastro-pets.component';
import { DetalhePetComponent } from './detalhe-pet/detalhe-pet.component';
import { PetService } from '../shared/services/pet.service';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaDetalheComponent } from './agenda-detalhe/agenda-detalhe.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { SolicitarServicoComponent } from './solicitar-servico/solicitar-servico.component';
import { NgxMaskModule } from 'ngx-mask';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

@NgModule({
  declarations: [HomeComponent, BuscaMapaComponent, CadastroComponent, PerfilComponent, PetsComponent, CadastroPetsComponent, DetalhePetComponent, AgendaComponent, AgendaDetalheComponent, SolicitarServicoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ClienteRoutingModule,
    DragScrollModule,
    NgxMaskModule.forRoot(),
    GooglePlaceModule
  ],
  providers: [
    PetService
  ]
})
export class ClienteModule { }
