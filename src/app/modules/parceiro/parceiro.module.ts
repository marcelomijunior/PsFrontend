import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ParceiroRoutingModule } from './parceiro-routing.module';
import { HomeParceiroComponent } from './home-parceiro/home-parceiro.component';
import { AgendaComponent } from './agenda/agenda.component';



@NgModule({
  declarations: [HomeParceiroComponent, AgendaComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ParceiroRoutingModule,
  ]
})
export class ParceiroModule { }
