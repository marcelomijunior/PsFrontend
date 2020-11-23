import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { DatabaseService } from '../../shared/services/database.service';
import {
  AGENDAMENTO,
  STATUS_AGENDAMENTO,
} from '../../shared/constants/agendamentos';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  @ViewChild('calendar') calendar: ElementRef;

  iconCalendar = faCalendarAlt;
  atendimentos = [];
  menuSelected = STATUS_AGENDAMENTO.ABERTO;
  statusOfService = ['Abertos', 'Confirmados', 'Encerrados'];

  constructor(private router: Router, private database: DatabaseService) {}

  ngOnInit(): void {
    this.loadList();
  }

  loadList() {
    this.atendimentos = this.database
      .list<AGENDAMENTO[]>('agendamentos')
      .filter(({ status }) => status === this.menuSelected);
  }

  openCalendar() {
    this.calendar.nativeElement.click();
  }

  changeMenu(index: number) {
    this.menuSelected = index;
    this.loadList();
  }

  abrirDetalhes(agendaId) {
    this.router.navigate([`/cliente/agenda/${agendaId}`]);
  }
}
