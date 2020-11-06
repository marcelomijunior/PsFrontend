import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-parceiro',
  templateUrl: './cadastro-parceiro.component.html',
  styleUrls: ['./cadastro-parceiro.component.scss']
})
export class CadastroParceiroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarParceiro(){
    this.router.navigate(['/parceiro/home']);
  }

}
