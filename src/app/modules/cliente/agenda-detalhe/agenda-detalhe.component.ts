import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faCalendar,
  faClock,
  faMapMarkerAlt,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons';
import { AGENDAMENTO } from '../../shared/constants/agendamentos';
import { DatabaseService } from '../../shared/services/database.service';

const TYPE_AGENDAMENTO = ['Aberto', 'Confirmado', 'Encerrado', 'Cancelado'];

@Component({
  selector: 'app-agenda-detalhe',
  templateUrl: './agenda-detalhe.component.html',
  styleUrls: ['./agenda-detalhe.component.scss'],
})
export class AgendaDetalheComponent implements OnInit {
  faCalendar = faCalendar;
  faClock = faClock;
  faMapMarkerAlt = faMapMarkerAlt;
  faStickyNote = faStickyNote;

  atendimento: AGENDAMENTO = null;

  constructor(
    private route: ActivatedRoute,
    private database: DatabaseService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const agendamentos = this.database.list<AGENDAMENTO[]>('agendamentos');
      this.atendimento = agendamentos.find(({ id }) => id == params.id);
    });
  }

  getStatus(): string {
    return TYPE_AGENDAMENTO[this.atendimento.status];
  }
}
