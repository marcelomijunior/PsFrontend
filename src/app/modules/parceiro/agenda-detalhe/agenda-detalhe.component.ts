import { Component, OnInit } from '@angular/core';
import { faCalendar, faClock, faMapMarkerAlt, faStickyNote } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agenda-detalhe',
  templateUrl: './agenda-detalhe.component.html',
  styleUrls: ['./agenda-detalhe.component.scss']
})
export class AgendaDetalheComponent implements OnInit {

  faCalendar = faCalendar;
  faClock = faClock;
  faMapMarkerAlt = faMapMarkerAlt;
  faStickyNote = faStickyNote;

  atendimento =
    {
      img: 'assets/imgs/dog-profile.jpg',
      horario: '15:00',
      nome: 'Rex',
      raca: 'Labraador',
      servico: 'Banho e Tosa',
      endereco: 'Avenida Djalma Vieira Cristo, 789 - Vale do Jatobá',
      telefone: '(31) 99988-7744'
    };

  constructor() { }

  ngOnInit(): void {
  }

}
