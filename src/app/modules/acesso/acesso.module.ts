import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoRoutingModule } from './acesso-routing.module';
import { EsqueciMinhaSenhaComponent } from './esqueci-minha-senha/esqueci-minha-senha.component';
import { SharedModule } from '../shared/shared.module';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, AcessoRoutingModule, SharedModule, FontAwesomeModule],
  declarations: [
    EsqueciMinhaSenhaComponent,
    LoginComponent,
    RedefinirSenhaComponent,
  ],
})
export class AcessoModule {}
