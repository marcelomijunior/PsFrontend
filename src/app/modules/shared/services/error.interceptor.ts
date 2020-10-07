// import { ToastrService } from 'ngx-toastr';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    // private toastr: ToastrService,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error, caught) => {
      this.handleAuthError(error);
      return of(Error);
    }) as any);
  }

  handleAuthError(err: HttpErrorResponse) {
    // let msg = '';
    switch (err.status) {
      case 200:
        // msg = await this.traducao.get('erros.200');
        // this.toastr.success('Operação realizada com sucesso');
        return true;
        // break;
      case 400:
        // msg = await this.traducao.get('erros.200');
        // this.toastr.success('Dados incorretos');
      break;
      case 401:
        localStorage.clear();
        this.router.navigate(['/login']);
        // msg = await this.traducao.get('erros.401');
        // this.toastr.error('Favor efetuar o login para continuar');
        break;
      case 403:
        // msg = await this.traducao.get('erros.403');
        // this.toastr.error('Você não possui permissão para executar esta ação');
        break;
      case 404:
        // msg = await this.traducao.get('erros.404');
        // this.toastr.error('Dados não encontrados');
        break;
      case 409:
        // this.toastr.error('Email já cadastrado');
        break;
      case 426:
        // this.toastr.error('Limite excedido, entre em contato com o suporte');
        break;
      case 500:
        // msg = await this.traducao.get('erros.500');
        // this.toastr.error('Erro no servidor');
        break;
      case 501:
        // msg = await this.traducao.get('erros.501');
        // this.toastr.error('Erro no servidor');
        break;
      default:
        // msg = await this.traducao.get('erros.default');
        // this.toastr.error('Ocorreu um erro, tente novamente');
        break;
    }
    throw Error;
  }
}
