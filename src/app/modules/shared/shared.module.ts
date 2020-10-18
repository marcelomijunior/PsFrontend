import { UploadService } from './services/upload.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { ErrorInterceptor } from './services/error.interceptor';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';

const MODULES = [
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ...MODULES],
  exports: [...MODULES],
  providers: [
    UploadService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
  ]
})
export class SharedModule {}
