import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  hideHeader = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  getNameRota(){

    this.hideHeader = false;
    console.log(this.router.url);
    
    if (this.router.url.split('/')[1] != '') {
      
      let nome = '';
      switch (this.router.url) {
        
        case '/login':
          this.hideHeader = true;
          nome = 'Login'
          break;
        case '/cliente/home':
          nome = 'Início'
          break;
        case '/cliente/perfil':
          nome = 'Perfil'
          break;
        case '/cliente/busca':
          this.hideHeader = true;
          nome = 'Mapa'
          break;
          
        default:
          break;
      }
      return nome;
    }
    this.hideHeader = true;
    return '';
  }

}
