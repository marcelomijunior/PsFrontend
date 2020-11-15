import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import { PetShop } from '../../models/petshop.model';
import { LocationService } from '../../services/location.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingCustomService } from '../loading-custom/loading-custom.service';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
  @Input() petshops: PetShop[] = [];

  mapa: Mapboxgl.Map;
  location: Array<number> = [];
  showFilter: boolean = false;
  listAddressUser: any[];
  address = 'Rua J, 98 - Barreiro - BH - MG';
  START_POSITION: [number, number] = [-44.0360645, -20.0109027];
  selectedCar: number;
  userMarker: Mapboxgl.Marker;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  constructor(
    private locationService: LocationService,
    private modalService: NgbModal,
    private loadingCustomService: LoadingCustomService,
    private config: NgSelectConfig
  ) {}

  ngOnInit(): void {
    this.createMap();
  }

  getLocation(long?: number, lat?: number) {
    this.loadingCustomService.configLoading(true, 'Buscando petshops');
    if (long && lat) {
      this.createUserMaker(long, lat);
    } else {
      this.locationService
        .getPosition()
        .then((pos) => {
          this.createUserMaker(pos.lng, pos.lat);
        })
        .catch((error) => {
          console.log('Unable to get the user location', error);
          this.loadingCustomService.configLoading(false);
        });
    }
  }

  getAddress(event) {
    this.loadingCustomService.configLoading(true, 'Buscando petshops');
    const lat = event.geometry.location.lat();
    const lng = event.geometry.location.lng();
    this.createUserMaker(lng, lat);
  }

  createMap() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-box', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.START_POSITION, // starting position
      zoom: 14, // starting zoom
    });
    // Add geolocate control to the map.
    this.mapa.addControl(
      new Mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        fitBoundsOptions: {
          zoom: 14,
        },
        showUserLocation: false,
        trackUserLocation: false,
        showAccuracyCircle: false,
      }),
      'bottom-right'
    );
    this.mapa.addControl(new Mapboxgl.NavigationControl(), 'bottom-right');

    this.petshops.forEach((petshop, index) => {
      const petshopName = `${petshop.nome.split(' ').join('-')}${index}`;
      this.createMarker(
        petshopName,
        petshop.nome,
        'assets/imgs/marker.png',
        petshop.long,
        petshop.lat,
        petshop.endereco,
        petshop.id
      );
    });
    this.getLocation();
    this.getAddressUser();
  }

  createUserMaker(long: number, lat: number) {
    const el = document.createElement('img');
    el.className = 'userMarker';
    el.src = 'assets/imgs/profile-marker.png';

    this.userMarker?.remove();
    this.userMarker = new Mapboxgl.Marker(el)
      .setLngLat([long, lat])
      .addTo(this.mapa);

    this.mapa.flyTo({ center: [long, lat], zoom: 14 });
    setTimeout(() => {
      this.loadingCustomService.configLoading(false);
    }, 3000);
  }

  createMarker(
    name: string,
    title: string,
    imageUrl: string,
    long: number,
    lat: number,
    address?: string,
    id: number | string = ''
  ) {
    this.mapa.on('load', () => {
      this.mapa.addSource(name, {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
                description:
                  name !== 'user'
                    ? `
                <div class="map-popup">
                    <h4>${title}</h4>
                    <h6>${address}</h6>
                    <a class="btn btn-info d-block mx-auto" href="/cliente/agenda/solicitar-servico/${id}">Ver mais</a>
                  </div>`
                    : `<div class="map-popup">
                    <h6>Minha localização</h6>
                  </div>`,
                icon: 'music',
              },
              geometry: {
                type: 'Point',
                coordinates: [long, lat],
              },
            },
          ],
        },
      });

      this.mapa.loadImage(imageUrl, (error, image) => {
        if (error) throw error;
        this.mapa.addImage(name, image);
      });

      // Add a layer showing the places.
      this.mapa.addLayer({
        id: name,
        type: 'symbol',
        source: name,
        layout: {
          'icon-image': name,
          'icon-size': 0.05,
          'icon-allow-overlap': true,
        },
      });

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      this.mapa.on('click', name, (e) => {
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
      this.mapa.on('mouseenter', name, () => {
        this.mapa.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      this.mapa.on('mouseleave', name, () => {
        this.mapa.getCanvas().style.cursor = '';
      });
    });
  }

  getAddressUser() {
    this.listAddressUser = [
      {
        lat: -19.9866129,
        long: -43.9729238,
        local: 'Rua A, 232 - Barreiro - BH - MG',
      },
      {
        lat: -19.9866129,
        long: -43.9729238,
        local: 'Rua B, 222 - Barreiro - BH - MG',
      },
      {
        lat: -19.9866129,
        long: -43.9729238,
        local: 'Rua C, 32 - Barreiro - BH - MG',
      },
    ];
  }

  openModalAddress(contentAddress) {
    this.modalService.open(contentAddress, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }

  openModalFilter(contentFilter) {
    this.modalService.open(contentFilter, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }

  selectAddress(modal, addressSelected) {
    this.address = addressSelected.local;
    modal.dismiss();
    this.getLocation(addressSelected.long, addressSelected.lat);
  }
}
