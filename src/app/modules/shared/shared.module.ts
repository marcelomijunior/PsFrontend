import { RouterModule } from '@angular/router';
import { UploadService } from './services/upload.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { ErrorInterceptor } from './services/error.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { NavegacaoComponent } from './components/navegacao/navegacao.component';
import { VoltarComponent } from './components/voltar/voltar.component';

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
