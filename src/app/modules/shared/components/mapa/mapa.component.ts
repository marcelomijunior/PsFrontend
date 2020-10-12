import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {


  lat = 28.704060;
  long = 77.102493;
  googleMapType = 'satellite';

  constructor() { }

  ngOnInit(): void {
  }

}
