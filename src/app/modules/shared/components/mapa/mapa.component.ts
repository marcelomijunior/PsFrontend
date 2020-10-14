import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  mapa: Mapboxgl.Map

  geojson = {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'properties': {
    'message': 'Foo',
    'iconSize': [60, 60]
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-66.324462890625, -16.024695711685304]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'message': 'Bar',
    'iconSize': [50, 50]
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-61.2158203125, -15.97189158092897]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'message': 'Baz',
    'iconSize': [40, 40]
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-63.29223632812499, -18.28151823530889]
    }
    }
    ]
    };

  constructor() { }

  ngOnInit(): void {
    Mapboxgl.accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-box', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-44.1041379, -19.9023386], // starting position
      zoom: 9 // starting zoom
    });
    this.createMarker(-44.1041379, -19.9023386);
  }

  createMarker(long: number, lat: number){
    var marker = new Mapboxgl.Marker({
      })
      .setLngLat([long, lat])
      .addTo(this.mapa);
       
      this.geojson.features.forEach(function (marker) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage =
        'url(https://placekitten.com/g/' +
        marker.properties.iconSize.join('/') +
        '/)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';
         
        el.addEventListener('click', function () {
        window.alert(marker.properties.message);
        });
         
        // add marker to map
        new Mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.mapa);
        });

  }

}
