Certainly! Here's an example of an Angular component that renders a Mapbox map and allows you to enter latitude and longitude coordinates. On a click event, the map will be redrawn with a point marker at the new coordinates:

```typescript
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
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: true }) mapContainer: ElementRef;

  latitude: number = 40.7128; // Default latitude
  longitude: number = -74.0060; // Default longitude
  map: mapboxgl.Map;

  ngAfterViewInit(): void {
    mapboxgl.accessToken = 'YOUR_ACCESS_TOKEN'; // Set your Mapbox access token here

    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
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
```

Make sure to install `mapbox-gl` package and set your Mapbox access token in `mapboxgl.accessToken` variable.

In this component, the Mapbox map is rendered in the `mapContainer` div using a reference to the element. The latitude and longitude values are binded to input fields using `ngModel`.

On input change, the `updateMap()` method is called, which updates the map by setting the new center coordinates and adds a new marker at the specified latitude and longitude.

Please note that this is a basic example and you might need to add additional error handling, styling, or customization based on your specific requirements.

pk.eyJ1Ijoia2VuZGFsbG1hcmszIiwiYSI6ImNsMTZxMzNpcjE1bjQzY3AzeWhnN3Z0amgifQ.N4eXOSxCllFd1E9qDFPtlw