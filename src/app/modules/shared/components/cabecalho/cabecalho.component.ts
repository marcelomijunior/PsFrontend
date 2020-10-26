import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

const onlyNumberRegex = new RegExp(/^\d+$/);

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
    '/cliente/agenda': 'Agenda',
    '/cliente/agenda-detalhe': 'Detalhe',
    '/cliente/cadastro': 'Cadastro',
    '/cliente/meus-pets': 'Meus pets',
    '/cliente/cadastro-pet': 'Cadastrar novo Pet',
    '/cliente/meus-pets/*': 'Meu pet',

    '/parceiro/home': 'Home',
    '/parceiro/agenda': 'Agenda',
    '/parceiro/agenda-detalhe': 'Detalhe',
    '/parceiro/relatorios': 'Relatórios',
    '/parceiro/perfil': 'Perfil',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(screen.width);
        let url = event.urlAfterRedirects;
        const [lastParam] = url.split('/').reverse();
        const isNumber = onlyNumberRegex.test(lastParam);

        if (isNumber) {
          url = url.replace(lastParam, '*')
        }

        this.getNameRota(url);
      }
    });
  }

  getNameRota(url: string) {
    this.routerName = this.routeMap[url];
  }
}
