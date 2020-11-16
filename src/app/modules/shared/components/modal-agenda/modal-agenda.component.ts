import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MONTHS_NAMES } from './constants';

type selectedDate = {
  weekIndex: number;
  hour: number;
  date: Date;
};

@Component({
  selector: 'app-modal-agenda',
  templateUrl: './modal-agenda.component.html',
  styleUrls: ['./modal-agenda.component.scss'],
})
export class ModalAgendaComponent implements OnInit {
  @Input() initialDate?: string;
  weekDays = [...Array(7).keys()];
  weekNames = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  availableHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  weeksOffset = 0;
  selectedDate: selectedDate = { weekIndex: null, hour: null, date: null };

  hoursOff = [12]; // Horas de folga (valor)
  daysOff = [0, 6]; // Dias de folga (index)

  weekDates = []; // Dias da semana que aparecem na tela
  datesInUse: selectedDate[] = []; // Dias e horas já ocupados

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.getWeekDays();
    this.loadUsedDates(); // Simula a request que traz as horários em uso
  }

  getMonthName() {
    return MONTHS_NAMES[this.weekDates[0].getMonth()];
  }

  getWeekDays() {
    this.weekDates = [];
    const daysOffset = this.weeksOffset * 7;

    this.weekDays.forEach((day) => {
      const iterationDate = new Date();
      const _date = iterationDate.getDate();
      const _day = iterationDate.getDay();

      iterationDate.setDate(_date - _day + day + daysOffset);
      this.weekDates.push(iterationDate);
    });
  }

  getNextWeekDays() {
    this.weeksOffset += 1;
    this.getWeekDays();
  }

  getPrevWeekDays() {
    this.weeksOffset -= 1;
    this.getWeekDays();
  }

  resetWeekDaysOffset() {
    this.weeksOffset = 0;
    this.getWeekDays();
  }

  onSubmit(hour, weekIndex) {
    const selectedDate = new Date(this.weekDates[weekIndex]);
    selectedDate.setHours(hour);
    selectedDate.setMinutes(0);
    console.log(selectedDate);

    this.selectedDate = {
      weekIndex: weekIndex,
      hour: hour,
      date: selectedDate,
    };
    return selectedDate;
  }

  isSelected(h, w) {
    const { hour, weekIndex } = this.selectedDate;
    return h === hour && w === weekIndex;
  }

  isUsed(h, w) {
    return false;
    // this.datesInUse.map(({ hour, weekIndex }) => )
  }

  loadUsedDates() {
    const datesInUse = [
      new Date('2020-11-16T14:00:00'),
      new Date('2020-11-19T10:00:00'),
      new Date('2020-11-19T11:00:00'),
      new Date('2020-11-20T16:00:00'),
    ];
    this.datesInUse = datesInUse.map((date) => {
      const _date = new Date(date);
      const _weekIndex = _date.getDay();
      const _hour = _date.getHours();
      return { weekIndex: _weekIndex, hour: _hour, date: _date };
    });
  }
}
