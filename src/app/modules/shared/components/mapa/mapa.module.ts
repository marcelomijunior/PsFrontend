import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa.component';
import { SharedModule } from '../../shared.module';


@NgModule({
  declarations: [MapaComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[MapaComponent]
})
export class MapaModule { }
