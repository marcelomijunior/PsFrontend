import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/acesso/acesso.module').then((m) => m.AcessoModule),
  },
  {
    path: 'cliente',
    loadChildren: () =>
      import('./modules/cliente/cliente.module').then((m) => m.ClienteModule),
  },
  {
    path: 'parceiro',
    loadChildren: () =>
      import('./modules/parceiro/parceiro.module').then((m) => m.ParceiroModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
