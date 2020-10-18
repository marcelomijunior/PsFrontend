import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { CabecalhoComponent } from './cabecalho.component';


@NgModule({
  declarations: [CabecalhoComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[CabecalhoComponent]
})
export class CabecalhoModule { }
