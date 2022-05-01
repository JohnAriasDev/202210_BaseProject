import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../Vehiculo';
import { VehiculoService } from '../vehiculo.service';


@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Vehiculo[] =[]
  contador: {[key: string]: number} = {};
  constructor(private vehiculoService:VehiculoService) { }

  getVehiculos():void{
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.contador = {};

      this.vehiculos.forEach((result) => {
        this.contador[result.marca] = this.contador[result.marca] ? (this.contador[result.marca] += 1) : 1;
      });
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
