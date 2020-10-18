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
    console.log(this.router.url);
    
    let nome = ' ';
    switch (this.router.url) {
     
      case '/login':
        this.hideHeader = true;
        nome = 'Login'
        break;
    
      default:
        break;
    }
    return nome;
  }

}
