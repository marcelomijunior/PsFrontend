import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { NavegacaoComponent } from './components/navegacao/navegacao.component';
import { VoltarComponent } from './components/voltar/voltar.component';
import { UploadService } from './services/upload.service';
import { PetService } from './services/pet.service';
import { TokenInterceptor } from './services/token.interceptor';
import { ErrorInterceptor } from './services/error.interceptor';

const MODULES = [
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  FontAwesomeModule,
  RouterModule,
];

const COMPONENTS = [
  CabecalhoComponent,
  MapaComponent,
  NavegacaoComponent,
  VoltarComponent
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ...MODULES],
  exports: [...MODULES, ...COMPONENTS],
  providers: [
    UploadService,
    PetService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  declarations: [...COMPONENTS, VoltarComponent],
})
export class SharedModule {}
