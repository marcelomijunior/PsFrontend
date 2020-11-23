import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { DatabaseService } from '../../shared/services/database.service';
import { ModalAgendaComponent } from '../../shared/components/modal-agenda/modal-agenda.component';
import {
  AGENDAMENTO,
  STATUS_AGENDAMENTO,
} from '../../shared/constants/agendamentos';

const DAY_NAMES = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  iconCalendar = faCalendarAlt;
  atendimentos = [];
  menuSelected = STATUS_AGENDAMENTO.ABERTO;
  statusOfService = ['Abertos', 'Confirmados', 'Encerrados'];
  selectedDate = new Date();

  constructor(
    private router: Router,
    private database: DatabaseService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadList();
  }

  loadList(date = new Date()) {
    const filterDate = date.toLocaleDateString('pt');
    this.atendimentos = this.database
      .list<AGENDAMENTO[]>('agendamentos')
      .filter(({ status, data }) => status === this.menuSelected && data === filterDate);
  }

  openCalendar() {
    const modalRef = this.modalService.open(ModalAgendaComponent);
    modalRef.componentInstance.onlyDay = true;
    modalRef.componentInstance.setHourDay.subscribe(({ date }) => {
      this.selectedDate = date;
      this.loadList(this.selectedDate);
      modalRef.close();
    });
  }

  changeMenu(index: number) {
    this.menuSelected = index;
    this.loadList(this.selectedDate);
  }

  getSelectedDateLabel() {
    return `${this.selectedDate.toLocaleDateString('pt')} - ${DAY_NAMES[this.selectedDate.getDay()]}`;
  }

  abrirDetalhes(agendaId) {
    this.router.navigate([`/cliente/agenda/${agendaId}`]);
  }
}
