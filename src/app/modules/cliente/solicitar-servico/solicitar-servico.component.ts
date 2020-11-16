import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertComponent } from '../../shared/components/modal-alert/modal-alert.component';
import { ModalAgendaComponent } from '../../shared/components/modal-agenda/modal-agenda.component';
import { LocationService } from '../../shared/services/location.service';
import { PetService } from '../../shared/services/pet.service';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { DatabaseService } from '../../shared/services/database.service';
import { AGENDAMENTO } from '../../shared/constants/agendamentos';

@Component({
  selector: 'app-solicitar-servico',
  templateUrl: './solicitar-servico.component.html',
  styleUrls: ['./solicitar-servico.component.scss']
})
export class SolicitarServicoComponent implements OnInit {

  iconCalendar = faCalendar;
  dataAtual = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate().toString().length == 1 ? '0' + new Date().getDate() : new Date().getDate()}`;
  serviceForm: FormGroup;
  msgErrorHours = [];
  payments = [];
  breeds = [];
  paymentSelected = {
    flag: 'assets/imgs/dinheiro.png',
    number: 'Dinheiro'
  };
  dateFormated = 'Escolha uma data e horário';

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private modalService: NgbModal,
    private petService: PetService,
    private database: DatabaseService
  ) { }

  ngOnInit(): void {
    this.getLocation();
    this.serviceForm = this.fb.group({
      service: [null, [Validators.required]],
      subService: [null, Validators.required],
      deliveryService: [null, Validators.required],
      petService: [null, Validators.required],
      animalService: [null],
      breedService: [null],
      address: [null, [Validators.required]],
      dateHourService: [null, [Validators.required]],
      obs: [null],
    });
    this.getPaymentsUser();

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

  getAddress(event){
    console.log(event);

  }

  changePayment(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);

    }, (reason) => {
      console.log(reason);
    });
  }

  getPaymentsUser(){
    this.payments = [
      {
        flag: 'assets/imgs/dinheiro.png',
        number: 'Dinheiro'
      },
      {
        flag: 'assets/imgs/mastercard.png',
        number: '**** **** **** 4213'
      },
      {
        flag: 'assets/imgs/elo.png',
        number: '**** **** **** 7894'
      },
      {
        flag: 'assets/imgs/visa.png',
        number: '**** **** **** 0568'
      },
    ];
  }

  selectedPayment(modal, pay){
    modal.dismiss('Cross click');
    this.paymentSelected = pay;
  }

  loadListBreeds(){
    if (this.serviceForm.controls.animalService.value == '1') {
      this.breeds = this.petService.racasCachorro;
    } else if(this.serviceForm.controls.animalService.value == '2'){
      this.breeds = this.petService.racasGato;
    }
  }

  confirmService(){
    const modalRef = this.modalService.open(ModalAlertComponent);
    modalRef.componentInstance.title = 'Serviço solicitado com sucesso!';
    modalRef.componentInstance.message = 'Para mais informações, verifique sua agenda.';

    this.database.add('agendamentos', {
      id: Date.now(),
      endereco: this.serviceForm.controls.address.value,
      horario: this.serviceForm.controls.dateHourService.value,
      servico: this.serviceForm.controls.service.value,
      nome: this.serviceForm.controls.petService.value,
      telefone: '(31) 99988-7744',
    })
  }

  openAgendaModal() {
    const modalRef = this.modalService.open(ModalAgendaComponent);
    modalRef.result.then((event) => { console.log('When user closes', event); }, () => { console.log('Backdrop click')})
    modalRef.componentInstance.setHourDay.subscribe(result => {
      this.serviceForm.controls.dateHourService.setValue(result.date);
      const {day, month, hour, minuts} = this.setTwoDigits(result.date)
      this.dateFormated = `${day}/${month}/${new Date(result.date).getFullYear()} - ${hour}:${minuts}`;
    });

  }

  setTwoDigits(date){
    let dateFormatted = {day: '', month: '', hour: '', minuts: ''};
    const day = new Date(date).getDate().toString();
    const month = (new Date(date).getMonth() + 1).toString();
    const hour = new Date(date).getHours().toString();
    const minuts = new Date(date).getMinutes().toString();
    dateFormatted.day = day.length == 1 ? '0' + day : day;
    dateFormatted.month = month.length == 1 ? '0' + month : month;
    dateFormatted.hour = hour.length == 1 ? '0' + hour : hour;
    dateFormatted.minuts = minuts.length == 1 ? '0' + minuts : minuts;
    return dateFormatted;
  }

}
