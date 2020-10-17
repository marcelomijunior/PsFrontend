import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/acesso/acesso.module')
    .then(m => m.AcessoModule)
  },
  {
    path: 'busca',
    loadChildren: () => import('./modules/busca-mapa/busca-mapa.module')
    .then(m => m.BuscaMapaModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m=> m.HomeModule)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
