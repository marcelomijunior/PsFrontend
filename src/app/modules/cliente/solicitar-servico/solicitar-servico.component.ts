import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from '../../shared/services/location.service';

@Component({
  selector: 'app-solicitar-servico',
  templateUrl: './solicitar-servico.component.html',
  styleUrls: ['./solicitar-servico.component.scss']
})
export class SolicitarServicoComponent implements OnInit {

  dataAtual = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate().toString().length == 1 ? '0' + new Date().getDate() : new Date().getDate()}`;
  serviceForm: FormGroup;
  msgErrorHours = [];

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.getLocation();
    this.serviceForm = this.fb.group({
      service: [null, [Validators.required]],
      subService: [null, Validators.required],
      address: [null, [Validators.required]],
      dateService: [null, [Validators.required]],
      hoursService: [null, Validators.required],
      obs: [null],
    });
    
  }

  validarHora(){
    const hours = this.serviceForm.controls.hoursService.value;
    
    this.msgErrorHours = [];
    if (hours) {
      const hour = hours.substr(0,2);
      const minute = hours.substr(2,4);
      
      if (hour > 23 || hour < 0) {
        this.msgErrorHours.push('A hora informada deve estar entre 00 e 23');
      } 
      if (!minute) {
        this.msgErrorHours.push('Os minutos devem ser informado');
      } else if (minute < 0 || minute > 59){
        this.msgErrorHours.push('Os minutos informados devem estar entre 00 e 59');  
      } else if(minute.length < 2){
        this.msgErrorHours.push('Os minutos informados devem conter dois algarismos. Ex: "01"');
      } 
    }
  }

  getLocation () {
    this.locationService.getPosition().then(pos=>
      {
         console.log(pos);
         
      });
  }

}
