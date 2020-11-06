import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ParceiroRoutingModule } from './parceiro-routing.module';
import { HomeParceiroComponent } from './home-parceiro/home-parceiro.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaDetalheComponent } from './agenda-detalhe/agenda-detalhe.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { PerfilParceiroComponent } from './perfil-parceiro/perfil-parceiro.component';
import { CadastroParceiroComponent } from './cadastro-parceiro/cadastro-parceiro.component';



@NgModule({
  declarations: [HomeParceiroComponent, AgendaComponent, AgendaDetalheComponent, RelatoriosComponent, PerfilParceiroComponent, CadastroParceiroComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ParceiroRoutingModule,
  ]
})
export class ParceiroModule { }
