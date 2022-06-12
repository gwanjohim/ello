import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
// google-maps-demo.component.ts
import { MapDirectionsService } from '@angular/google-maps';

@Component({
  selector: 'app-google-maps-demo',
  templateUrl: './google-maps-demo.component.html',
  styleUrls: ['./google-maps-demo.component.scss']
})
export class GoogleMapsDemoComponent implements OnInit {

  @ViewChild(MapInfoWindow)
  infoWindow!: MapInfoWindow;

  center: google.maps.LatLngLiteral | undefined;
  zoom = 14;

  markerPositions: google.maps.LatLngLiteral[] = [];

   directionsResults$: Observable<google.maps.DirectionsResult | undefined> | undefined;

  constructor(private mapDirectionsService: MapDirectionsService) {
    //get the current location of the user
    navigator.geolocation.getCurrentPosition((position) => {


      let lat = position.coords.latitude;
      let long = position.coords.longitude

      console.error(lat, long);


      this.center = { lat: lat, lng: long }

      const request: google.maps.DirectionsRequest = {
        origin: this.center,
        destination: { lat: -1.255020988865295, lng: 36.72259055249598, },
        travelMode: google.maps.TravelMode.DRIVING,
        // drivingOptions:{departureTime: new Date()}
      };
      this.directionsResults$ = this.mapDirectionsService.route(request).pipe(map(response => response.result));
    });

    // while (this.center !== undefined) {
    //   const request: google.maps.DirectionsRequest = {
    //     origin: this.center,
    //     destination: { lat: -1.255020988865295, lng: 36.72259055249598, },
    //     travelMode: google.maps.TravelMode.DRIVING,
    //     // drivingOptions:{departureTime: new Date()}
    //   };
    //   this.directionsResults$ = this.mapDirectionsService.route(request).pipe(map(response => response.result));
    // }
    //set the map with current origin and final destination


  }

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng!.toJSON());
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }





  ngOnInit(): void {

  }



}
