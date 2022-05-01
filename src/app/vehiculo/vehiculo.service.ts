import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from './Vehiculo';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getVehiculos():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }

}
