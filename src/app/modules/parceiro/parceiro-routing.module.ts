import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeParceiroComponent } from './home-parceiro/home-parceiro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeParceiroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParceiroRoutingModule { }
