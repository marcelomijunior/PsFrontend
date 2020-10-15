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

  constructor() { }

  ngOnInit(): void {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-box', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-44.0360645, -20.0109027], // starting position
      zoom: 14 // starting zoom
    });
    // Add geolocate control to the map.
    this.mapa.addControl(
      new Mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      fitBoundsOptions:{
        zoom: 14
      },
      trackUserLocation: false,
      showAccuracyCircle: false,
      }),
    );
    this.mapa.addControl(new Mapboxgl.NavigationControl());

    this.createMarker(-44.0360645, -20.0109027);
  }

  createMarker(long: number, lat: number){
    
    this.mapa.on('load', () => {
      this.mapa.addSource('places', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [      
            {
            'type': 'Feature',
            'properties': {
            'description':
            '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',
            'icon': 'music'
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [long, lat]
            }
            },
        
          
          ]
        }
      });

    // Add a layer showing the places.
    this.mapa.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
        'icon-image': '{icon}-15',
        'icon-allow-overlap': true
        }
      });
      
      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      this.mapa.on('click', 'places', (e) => {
        var coordinates = e.features[0].geometry['coordinates'].slice();
        var description = e.features[0].properties.description;
        
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      
      new Mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(this.mapa);
      });
      
      // Change the cursor to a pointer when the mouse is over the places layer.
      this.mapa.on('mouseenter', 'places', () => {
          this.mapa.getCanvas().style.cursor = 'pointer';
      });
      
      // Change it back to a pointer when it leaves.
      this.mapa.on('mouseleave', 'places', () => {
        this.mapa.getCanvas().style.cursor = '';
      });

  })}

}
