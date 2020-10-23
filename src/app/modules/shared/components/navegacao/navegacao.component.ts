import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faCalendar, faClipboardList, faHome, faMapMarked, faPaw, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {
  isHidden = true;
  linksList = []

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.shouldAppear(event.urlAfterRedirects);
      }
    });
  }

  shouldAppear(url: string) {
    const isClient = url.includes('cliente');
    const isCopartner = url.includes('parceiro');
    const isSignup = url.includes('cadastro');
    isClient ? this.setMenuNavigationClient() : this.setMenuNavigationCopartner();
    this.isHidden = (!isClient && !isCopartner) || isSignup;
  }
  setMenuNavigationClient() {
    this.linksList = [
      {
        title: 'Início',
        icon: faHome,
        link: '/cliente/home',
      },
      {
        title: 'Mapa',
        icon: faMapMarked,
        link: '/cliente/busca',
      },
      {
        title: 'Agenda',
        icon: faCalendar,
        link: '/cliente/cart',
      },
      {
        title: 'Pets',
        icon: faPaw,
        link: '/cliente/meus-pets',
      },
      {
        title: 'Perfil',
        icon: faUser,
        link: '/cliente/perfil',
      }
    ]
  }

  setMenuNavigationCopartner() {
    this.linksList = [
      {
        title: 'Início',
        icon: faHome,
        link: '/parceiro/home',
      },
      {
        title: 'Agenda',
        icon: faCalendar,
        link: '/parceiro/agenda',
      },
      {
        title: 'Relatórios',
        icon: faClipboardList,
        link: '/parceiro/relatorio',
      },
      {
        title: 'Perfil',
        icon: faUser,
        link: '/parceiro/perfil',
      }
    ]
  }

}
