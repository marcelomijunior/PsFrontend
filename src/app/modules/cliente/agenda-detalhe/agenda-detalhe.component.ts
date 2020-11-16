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

  atendimento = {
    img: 'assets/imgs/dog-profile.jpg',
    horario: '15:00',
    nome: 'Rex',
    raca: 'Labrador',
    servico: 'Banho e Tosa',
    endereco: 'Avenida Djalma Vieira Cristo, 789 - Vale do Jatobá',
    telefone: '(31) 99988-7744',
  };

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
}
