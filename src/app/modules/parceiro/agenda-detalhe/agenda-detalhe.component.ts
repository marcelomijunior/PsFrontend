import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCalendar, faClock, faMapMarkerAlt, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { AGENDAMENTO, STATUS_AGENDAMENTO } from '../../shared/constants/agendamentos';
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

  canceledStatus = [STATUS_AGENDAMENTO.CANCELADO, STATUS_AGENDAMENTO.ENCERRADO];

  atendimento: AGENDAMENTO = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private database: DatabaseService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const agendamentos = this.database.list<AGENDAMENTO[]>('agendamentos');
      this.atendimento = agendamentos.find(({ id }) => id == params.id);
    });
  }

  aceitarAtendimento() {
    const id = this.atendimento.id;
    const newStatus =
    this.atendimento.status === STATUS_AGENDAMENTO.CONFIRMADO
      ? STATUS_AGENDAMENTO.ENCERRADO
      : STATUS_AGENDAMENTO.CONFIRMADO;

    this.database.patch<AGENDAMENTO>('agendamentos', id, { status: newStatus });
    this.toastr.success('Agendamento confirmado com sucesso!', '', { positionClass: 'toast-top-center' });
    this.router.navigate(['/parceiro/agenda']);
  }

  cancelarAtendimento() {
    const id = this.atendimento.id;
    this.database.patch<AGENDAMENTO>('agendamentos', id, { status: STATUS_AGENDAMENTO.CANCELADO });
    this.toastr.warning('Agendamento cancelado com sucesso!', '', { positionClass: 'toast-top-center' });
    this.router.navigate(['/parceiro/agenda']);
  }

  getStatus(): string {
    return TYPE_AGENDAMENTO[this.atendimento.status];
  }

  getNextStep(): string {
    return this.atendimento.status === STATUS_AGENDAMENTO.CONFIRMADO ? 'Finalizar atendimento' : 'Aceitar atendimento';
  }
}
