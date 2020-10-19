import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  petsList = []

  constructor() { }

  ngOnInit(): void {
    this.petsList = [
      {
        id: 0,
        img: 'assets/imgs/dog-profile.jpg',
        nome: 'Rex',
      },
      {
        id: 1,
        img: 'assets/imgs/dog-profile.jpg',
        nome: 'Simba',
      },
      {
        id: 2,
        img: 'assets/imgs/dog-profile.jpg',
        nome: 'Rex',
      },
    ]
  }

}
