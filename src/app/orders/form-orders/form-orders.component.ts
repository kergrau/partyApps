import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service';
import { ServiceServicesService } from 'src/app/web-services/service-services.service';
import { OrderService } from 'src/app/web-services/order.service';
import * as L from 'node_modules/leaflet';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/web-services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-form-orders',
  templateUrl: './form-orders.component.html',
  styleUrls: ['./form-orders.component.css']
})
export class FormOrdersComponent implements AfterViewInit {

  public services: Service[];
  orders = {
    serviceid: 0,
    latitude: '',
    longitude: '',
    clientid: 0
  };
  private marker;

  constructor(private serService: ServiceServicesService,
              private ordService: OrderService, private router: Router,
              private authService: AuthService,
              private snackBar: MatSnackBar) { }

  private map;

  private initMap(): void {
    this.map = L.map('mymap', {
      center: [ 11.000000, -74.806984 ],
      zoom: 13
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}' +
      '/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy;' +
        '<a href="https://www.openstreetmap.org/">OpenStreetMap</a>' +
        'contributors, <a href="https://creativecommons.org/licenses/' +
        'by-sa/2.0/">CC-BY-SA</a>, Imagery ©' +
        '<a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1Ijoia2VyZ3JhdSIsImEiOiJjazcyYXZ' +
        'kZXkwMGQ2M2txZ3A1eG50YjRwIn0.JBC6g_7U5GkxjuG9EpC05Q'
    }).addTo(this.map);
  }

  SnackyCreate() {
    this.snackBar.openFromComponent(SnackyComponent, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }

  Create() {
    this.orders.latitude = this.marker.getLatLng().lat;
    this.orders.longitude = this.marker.getLatLng().lng;
    this.orders.clientid = this.authService.getIdPerson(this.authService.token);
    this.ordService.createOrder(this.orders).subscribe(
      data => {

        this.SnackyCreate();
        this.router.navigate(['/']);
      }
    );
  }

  ngAfterViewInit() {

    this.serService.getListServices().subscribe(
      data => {
        this.services = data;
      }
    );

    this.initMap();
    this.marker = L.marker([11.000000, -74.806984], {draggable: true}).addTo(this.map);

  }

}

@Component({
  selector: 'app-snacky-component-snack',
  templateUrl: 'snacky-component-snack.html',
  styles: [`
    .snacky {
      color: hotpink;
    }
  `],
})
export class SnackyComponent {}
