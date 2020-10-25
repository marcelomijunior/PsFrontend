import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  @ViewChild('barCanvas') barCanvas: ElementRef;
  @ViewChild('barCanvasMoney') barCanvasMoney: ElementRef;

  dataAtual = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
  valoresSemana = [55.00, 10.50, 5.45];
  valoresSemanaMoney = [55.00, 10.50, 5.45, 20, 30, 15, 25];
  private barChart: Chart;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.gerarGrafico();
    this.gerarGraficoMoney();
  }

  private gerarGrafico() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Crédito', 'Débito', 'Dinheiro'],
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

  private gerarGraficoMoney() {
    this.barChart = new Chart(this.barCanvasMoney.nativeElement, {
      type: 'bar',
      data: {
        labels: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'],
        datasets: [
          {
            data: this.valoresSemanaMoney,
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
