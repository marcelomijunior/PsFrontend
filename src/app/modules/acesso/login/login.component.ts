import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private modalService: NgbModal
    ) {}

  onLogin() {
    this.router.navigate(['/cliente']);
  }

  openOptionsRegister(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
      
    }, (reason) => {
      console.log(reason);
    });
  }

  onRegisterClient(modal){
    modal.dismiss('Cross click');
    this.router.navigate(['/cliente/cadastro']);
  }

  onRegisterParceiro(modal){
    modal.dismiss('Cross click');
    this.router.navigate(['/parceiro/cadastro']);
  }

  ngOnInit() {}
}
