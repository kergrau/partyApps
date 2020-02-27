import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service'
import { ServiceServicesService } from 'src/app/web-services/service-services.service';
import * as L from 'node_modules/leaflet';
import { Order } from '../order';


@Component({
  selector: 'app-form-orders',
  templateUrl: './form-orders.component.html',
  styleUrls: ['./form-orders.component.css']
})
export class FormOrdersComponent implements AfterViewInit {
  
  constructor(private serService: ServiceServicesService) { }
  private map;
  
    
  private initMap(): void {
    this.map = L.map('mymap', {
      center: [ 11.000000, -74.806984 ],
      zoom: 13
    });
    
     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1Ijoia2VyZ3JhdSIsImEiOiJjazcyYXZkZXkwMGQ2M2txZ3A1eG50YjRwIn0.JBC6g_7U5GkxjuG9EpC05Q'
    }).addTo(this.map);
  }
  private services: Service[];
  private orders: Order = new Order();
  
  
  
  
  Create(){
    console.log(this.map);
   
  }

  coordinate;
  onMapClick(e) {
    //console.log(this.map)
    let popup = L.popup()
    .setLatLng(e.latlng)
    this.coordinate = popup.getLatLng();
  
    console.log(this.coordinate);
    L.marker([this.coordinate.lat, this.coordinate.lng]).addTo(this.map);
  }

  marker(lat, lng){
    L.marker([lat, lng]).addTo(this.map);
  }

 


  
  ngAfterViewInit() {

    this.serService.getListServices().subscribe(
      data =>{
        this.services = data;
        console.log(this.services);
      }
    );
      
    this.initMap();
    this.map.on('click', this.onMapClick);
  }

}
