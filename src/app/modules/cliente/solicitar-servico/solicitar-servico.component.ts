import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertComponent } from '../../shared/components/modal-alert/modal-alert.component';
import { ModalAgendaComponent } from '../../shared/components/modal-agenda/modal-agenda.component';
import { LocationService } from '../../shared/services/location.service';
import { PetService } from '../../shared/services/pet.service';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { DatabaseService } from '../../shared/services/database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AGENDAMENTO, STATUS_AGENDAMENTO } from '../../shared/constants/agendamentos';

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
    private router: Router,
    private database: DatabaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
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
    this.route.queryParams.subscribe(params => {
      this.serviceForm.controls.service.setValue(params.typeService);
      this.serviceForm.controls.address.setValue(params.address);
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

    this.database.add<AGENDAMENTO>('agendamentos', {
      id: Date.now(),
      status: STATUS_AGENDAMENTO.ABERTO,
      endereco: this.serviceForm.controls.address.value,
      horario: new Date(this.serviceForm.controls.dateHourService.value).getHours() + ':00',
      data: new Date(this.serviceForm.controls.dateHourService.value).toLocaleDateString('pt'),
      servico: this.serviceForm.controls.service.value,
      nome: this.serviceForm.controls.petService.value,
      telefone: '(31) 99988-7744',
    })

    this.router.navigate(['/cliente/agenda'])
  }

  openAgendaModal() {
    const modalRef = this.modalService.open(ModalAgendaComponent);
    modalRef.componentInstance.setHourDay.subscribe(result => {
      this.serviceForm.controls.dateHourService.setValue(result.date);
      const {day, month, hour, minuts} = this.setTwoDigits(result.date)
      this.dateFormated = `${day}/${month}/${new Date(result.date).getFullYear()} - ${hour}:${minuts}`;
    });

  }

  setTwoDigits(date){
    let dateFormatted = {day: '', month: '', hour: '', minuts: ''};
    dateFormatted.day = new Date(date).getDate().toString().padStart(2, '0');
    dateFormatted.month = (new Date(date).getMonth() + 1).toString().padStart(2, '0');
    dateFormatted.hour = new Date(date).getHours().toString().padStart(2, '0');
    dateFormatted.minuts = new Date(date).getMinutes().toString().padStart(2, '0');
    return dateFormatted;
  }

}
