import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaMapaComponent } from './busca-mapa/busca-mapa.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'busca', component: BuscaMapaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
