import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { DatabaseService } from '../../shared/services/database.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  @ViewChild('calendar') calendar: ElementRef;

  iconCalendar = faCalendarAlt;
  atendimentos = [];
  menuSelected = [true, false, false];
  statusOfService = ['Confirmados', 'Abertos', 'Encerrados'];

  constructor(
    private router: Router,
    private database: DatabaseService
  ) {}

  ngOnInit(): void {
    this.atendimentos = this.database.list('agendamentos');
  }

  openCalendar() {
    this.calendar.nativeElement.click();
  }

  changeMenu(index: number) {
    for (let i = 0; i < this.menuSelected.length; i++) {
      if (index == i) {
        this.menuSelected[i] = true;
      } else {
        this.menuSelected[i] = false;
      }
    }
  }

  abrirDetalhes(agendaId){
    this.router.navigate([`/cliente/agenda/${agendaId}`]);
  }
}
