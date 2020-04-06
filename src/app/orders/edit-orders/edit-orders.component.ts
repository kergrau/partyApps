import { Component, OnInit } from '@angular/core';
import list from 'src/app/list.json';
import { Order } from '../order';
import { Router } from '@angular/router';
import { ServiceServicesService } from 'src/app/web-services/service-services.service';
import { OrderService} from 'src/app/web-services/order.service';
import { Service } from 'src/app/services/service';
import * as L from 'node_modules/leaflet';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent implements OnInit {

  public orders: Order = new Order();
  public services: Service[];
  private map;
  private marker;



  constructor(private ordService: OrderService,
              private serService: ServiceServicesService,
              private router: Router, private snackBar: MatSnackBar) { }

    private initMap(): void {
      this.map = L.map('mymap', {
        center: [ 11.000000, -74.806984 ],
        zoom: 13});
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?' +
        'access_token={accessToken}', {
        attribution: 'Map data &copy;' +
         '<a href="https://www.openstreetmap.org/">OpenStreetMap</a>' +
         'contributors, <a href="https://creativecommons.org/licenses' +
         '/by-sa/2.0/">CC-BY-SA</a>, Imagery © ' +
         '<a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoia2VyZ3JhdSIsImEiOiJjazcyYXZkZXkwMGQ2M2t' +
         'xZ3A1eG50YjRwIn0.JBC6g_7U5GkxjuG9EpC05Q'
      }).addTo(this.map);
    }

    SnackyUpdate() {
      this.snackBar.open('Updated', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['snacky']
      });
    }

  Update() {
    this.orders.latitude = this.marker.getLatLng().lat;
    this.orders.longitude = this.marker.getLatLng().lng;
    this.ordService.editOrder(this.orders)
    .subscribe(data => {
      this.SnackyUpdate();
      this.router.navigate(['list-orders']);
    });
  }

  ngOnInit() {
    list.forEach(element => {
      this.orders = {
        id: element.id,
        rating: element.rating,
        status: element.status,
        clientid: element.clientid,
        serviceid: element.serviceid,
        latitude: element.latitude,
        longitude: element.longitude
      };
      //this.selected = this.orders.serviceid.toString();
      //console.log(this.selected);
    });

    this.serService.getListServices().subscribe(
      data => {
        this.services = data;
      }
    );

    this.initMap();
    this.marker = L.marker([this.orders.latitude, this.orders.longitude],
      {draggable: true}).addTo(this.map);
  }


}
