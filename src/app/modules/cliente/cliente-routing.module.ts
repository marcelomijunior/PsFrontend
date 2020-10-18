import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaMapaComponent } from './busca-mapa/busca-mapa.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'busca', component: BuscaMapaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
