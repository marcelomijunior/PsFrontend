import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaDetalheComponent } from './agenda-detalhe/agenda-detalhe.component';
import { AgendaComponent } from './agenda/agenda.component';
import { HomeParceiroComponent } from './home-parceiro/home-parceiro.component';
import { PerfilParceiroComponent } from './perfil-parceiro/perfil-parceiro.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeParceiroComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'agenda-detalhe', component: AgendaDetalheComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'perfil', component: PerfilParceiroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParceiroRoutingModule { }
