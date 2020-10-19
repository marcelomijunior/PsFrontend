import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faHome, faMapMarked, faPaw, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {
  isHidden = true;
  linksList = [
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
      icon: faShoppingCart,
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
    const isSignup = url.includes('cadastro');
    this.isHidden = !isClient || isSignup;
  }

}
