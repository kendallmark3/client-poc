

import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  template: `
    <div #mapContainer class="map-container"></div>
    <div class="coord-input">
      <label>Latitude:</label>
      <input type="number" [(ngModel)]="latitude" (input)="updateMap()" />
      <label>Longitude:</label>
      <input type="number" [(ngModel)]="longitude" (input)="updateMap()" />
    </div>
  `,
  styles: [`
    .map-container {
      height: 400px;
      width: 100%;
    }
    .coord-input {
      margin-top: 10px;
    }
  `]
})
export class MapboxComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: true }) mapContainer: ElementRef;

  latitude: number = 40.7128; // Default latitude
  longitude: number = -74.0060; // Default longitude
  map: mapboxgl.Map;

  ngAfterViewInit(): void {
    //Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1Ijoia2VuZGFsbG1hcmszIiwiYSI6ImNsMTZxMzNpcjE1bjQzY3AzeWhnN3Z0amgifQ.N4eXOSxCllFd1E9qDFPtlw');
    //mapboxgl.accessToken = 'pk.eyJ1Ijoia2VuZGFsbG1hcmszIiwiYSI6ImNsMTZxMzNpcjE1bjQzY3AzeWhnN3Z0amgifQ.N4eXOSxCllFd1E9qDFPtlw'; // Set your Mapbox access token here

    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      //accessToken:'yourkey',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.longitude, this.latitude],
      zoom: 12,
    });

    this.addMarker();
  }

  updateMap(): void {
    if (this.map) {
      this.map.setCenter([this.longitude, this.latitude]);
      this.addMarker();
    }
  }

  addMarker(): void {
    const marker = new mapboxgl.Marker()
      .setLngLat([this.longitude, this.latitude])
      .addTo(this.map);
  }
}
