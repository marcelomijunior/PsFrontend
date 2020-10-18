import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuscaMapaComponent } from './busca-mapa.component';


const routes: Routes = [
  { path: '', component: BuscaMapaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscaMapaRoutingModule { }
