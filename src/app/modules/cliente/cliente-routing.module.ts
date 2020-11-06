import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaMapaComponent } from './busca-mapa/busca-mapa.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PetsComponent } from './pets/pets.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroPetsComponent } from './cadastro-pets/cadastro-pets.component';
import { DetalhePetComponent } from './detalhe-pet/detalhe-pet.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaDetalheComponent } from './agenda-detalhe/agenda-detalhe.component';
import { SolicitarServicoComponent } from './solicitar-servico/solicitar-servico.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'busca', component: BuscaMapaComponent },
  { path: 'busca/:typeService', component: BuscaMapaComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'agenda/:id', component: AgendaDetalheComponent },
  { path: 'agenda/solicitar-servico/:id', component: SolicitarServicoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'meus-pets', component: PetsComponent },
  { path: 'cadastro-pet', component: CadastroPetsComponent },
  { path: 'meus-pets/:id', component: DetalhePetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
