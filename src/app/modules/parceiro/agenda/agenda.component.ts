import { Component,  ElementRef,  OnInit, ViewChild } from '@angular/core';
import { faCalendarAlt, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  @ViewChild('calendar') calendar: ElementRef;

  iconCalendar = faCalendarAlt;
  atendimentos = []
  menuSelected = [true, false, false];
  statusOfService = ['Confirmados', 'Abertos', 'Encerrados']

  constructor() { }

  ngOnInit(): void {
    this.atendimentos = [
      {
        img: 'assets/imgs/dog-profile.jpg',
        horario: '15:00',
        nome: 'Rex',
        raca: 'Labrador',
        servico: 'Banho e Tosa',
        endereco: 'Avenida Djalma Vieira Cristo, 789 - Vale do Jatobá',
        telefone: '(31) 99988-7744'
      },
      {
        img: 'assets/imgs/dog-profile.jpg',
        horario: '15:00',
        nome: 'Rex',
        raca: 'Labrador',
        servico: 'Banho e Tosa',
        endereco: 'Avenida Djalma Vieira Cristo, 789 - Vale do Jatobá',
        telefone: '(31) 99988-7744'
      },
      {
        img: 'assets/imgs/dog-profile.jpg',
        horario: '15:00',
        nome: 'Rex',
        raca: 'Labrador',
        servico: 'Banho e Tosa',
        endereco: 'Avenida Djalma Vieira Cristo, 789 - Vale do Jatobá',
        telefone: '(31) 99988-7744'
      },
      {
        img: 'assets/imgs/dog-profile.jpg',
        horario: '15:00',
        nome: 'Rex',
        raca: 'Labrador',
        servico: 'Banho e Tosa',
        endereco: 'Avenida Djalma Vieira Cristo, 789 - Vale do Jatobá',
        telefone: '(31) 99988-7744'
      },
      {
        img: 'assets/imgs/dog-profile.jpg',
        horario: '15:00',
        nome: 'Rex',
        raca: 'Labrador',
        servico: 'Banho e Tosa',
        endereco: 'Avenida Djalma Vieira Cristo, 789 - Vale do Jatobá',
        telefone: '(31) 99988-7744'
      },
    ]
  }

  openCalendar(){
    this.calendar.nativeElement.click();
  }

  changeMenu(index: number){
    for (let i = 0; i < this.menuSelected.length; i++) {
      if (index == i) {
        this.menuSelected[i] = true;
      } else {
        this.menuSelected[i] = false;
      }
    }
  }

}

