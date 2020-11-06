import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingCustomService {

  public textLoading = 'Carregando';
  public showLoading: boolean;

  constructor() { }

  public configLoading(showLoading: boolean, textLoading: string = 'Carregando'){
    this.textLoading = textLoading;
    this.showLoading = showLoading;
  }

}
