import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/acesso/acesso.module')
    .then(m => m.AcessoModule)
  },
  // { path: 'dashboard', loadChildren: '../app/modules/layout/layout.module#LayoutModule' },
  // { path: 'pagamento', loadChildren: '../app/modules/pagamento/pagamento.module#PagamentoModule' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
