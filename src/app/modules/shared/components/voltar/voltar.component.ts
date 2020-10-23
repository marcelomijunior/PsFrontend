import { Component, Input, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-voltar',
  templateUrl: './voltar.component.html',
  styleUrls: ['./voltar.component.scss']
})
export class VoltarComponent implements OnInit {

  @Input() iconClass: string = '';
  iconBack = faChevronLeft;

  constructor() { }

  ngOnInit(): void {
  }

  doBack(){
    window.history.back()
  }

}
