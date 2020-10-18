import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsqueciMinhaSenhaComponent } from './esqueci-minha-senha/esqueci-minha-senha.component';
import { LoginComponent } from './login/login.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'esqueci-minha-senha', component: EsqueciMinhaSenhaComponent },
  { path: 'redefinir-senha', component: RedefinirSenhaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessoRoutingModule { }
