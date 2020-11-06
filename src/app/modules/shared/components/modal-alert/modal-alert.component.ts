import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss']
})
export class ModalAlertComponent implements OnInit {

  @ViewChild("content") content: ElementRef;
  @Input() title: string;
  @Input() message: string;
  @Input() textButton: string = 'Entendido';

  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {}

  ngAfterViewInit(){
  }
  

}
