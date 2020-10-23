import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  public routerName = '';
  private routeMap = {
    // '/login': 'Login',
    '/cliente/home': 'Início',
    '/cliente/perfil': 'Perfil',
    '/cliente/cadastro': 'Cadastro',
    '/cliente/meus-pets': 'Meus pets',

    '/parceiro/home': 'Home',
    '/parceiro/agenda': 'Agenda',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(screen.width);
        this.getNameRota(event.urlAfterRedirects);
      }
    });
  }

  getNameRota(url: string) {
    this.routerName = this.routeMap[url];
  }
}
