import {  Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home-parceiro',
  templateUrl: './home-parceiro.component.html',
  styleUrls: ['./home-parceiro.component.scss']
})

export class HomeParceiroComponent implements OnInit {
  
  @ViewChild('barCanvas') barCanvas: ElementRef;

  dataAtual = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
  atendimentos = [];
  valoresSemana = [55.00, 10.50, 5.45, 50.12, 7, 8, 20];
  private barChart: Chart;
  
  constructor( ) { }
  ngOnInit(): void {
    this.atendimentos = [
      {
        hora: '18:00',
        tipo: 'Veterinário'
      },
      {
        hora: '18:30',
        tipo: 'Banho e Tosa'
      },
      {
        hora: '20:00',
        tipo: 'Banho e tosa'
      },
    ];
  }

  ngAfterViewInit(): void {
    this.gerarGrafico()
  }

  private gerarGrafico() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'],
        datasets: [
          {
            data: this.valoresSemana,
            backgroundColor: 'rgba(124, 207, 207, 0.2)',
            hoverBackgroundColor: 'rgba(124, 207, 207, 0.5)',
            borderColor: '#1e7b80',
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        tooltips: {
          backgroundColor : '#1e7b80',
        }
      }
    });
  }


}
