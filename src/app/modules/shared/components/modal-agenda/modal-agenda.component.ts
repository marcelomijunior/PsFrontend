import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MONTHS_NAMES } from './constants';
import { isSameDate } from '../../../../utils';
import { DatabaseService } from '../../services/database.service';
import { AGENDAMENTO } from '../../constants/agendamentos';

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
  @Input() onlyDay?: boolean = false;
  @Output() setHourDay: EventEmitter<any> = new EventEmitter();

  weekDays = [...Array(7).keys()];
  weekNames = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  availableHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  weeksOffset = 0;
  selectedDate: selectedDate = { weekIndex: null, hour: null, date: null };

  hoursOff = [12]; // Horas de folga (valor)
  daysOff = [0, 6]; // Dias de folga (index)

  weekDates: Date[] = []; // Dias da semana que aparecem na tela
  datesInUse: { [key: string]: selectedDate[] } = {}; // Dias e horas já ocupados

  constructor(public activeModal: NgbActiveModal, private database: DatabaseService) {}

  ngOnInit(): void {
    this.getWeekDays();
    this.loadUsedDates(); // Simula a request que traz as horários em uso
  }

  getModalTitle() {
    return this.onlyDay ? 'Selecione um dia' : 'Selecione a data e horário';
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
      iterationDate.setHours(0);
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
    this.selectedDate = {
      weekIndex: weekIndex,
      hour: hour,
      date: selectedDate,
    };
    this.setHourDay.emit(this.selectedDate);
    return this.selectedDate;
  }

  isSelected(h, w) {
    if (!this.selectedDate.date) return false;

    const { hour, date } = this.selectedDate;
    const _selectedDate = this.weekDates[w];

    return h === hour && isSameDate(date, _selectedDate);
  }

  isUsed(h, w) {
    const _date = this.weekDates[w];
    const _dateKey = this.getDateKey(_date);
    const isInUse = this.datesInUse[_dateKey];

    if (!isInUse) return false;

    return isInUse.some(({ hour }) => hour === h);
  }

  isToday(w) {
    const _date = this.weekDates[w];
    return isSameDate(_date, new Date());
  }

  loadUsedDates() {
    const datesInUse = this.database.list<AGENDAMENTO[]>('agendamentos').map(atendimento => {
      if (!atendimento.data) return null;
      const date = atendimento.data.split('/').reverse().join('-');
      return new Date(`${date}T${atendimento.horario}`);
    }).filter(Boolean);

    this.datesInUse = datesInUse.reduce((acc, date) => {
      const _date = new Date(date);
      const _weekIndex = _date.getDay();
      const _hour = _date.getHours();
      const dateKey = this.getDateKey(_date);

      return { ...acc, [dateKey]: [ ...(acc[dateKey] || []), { weekIndex: _weekIndex, hour: _hour, date: _date }]};
    }, {});
  }

  getDateKey(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}
