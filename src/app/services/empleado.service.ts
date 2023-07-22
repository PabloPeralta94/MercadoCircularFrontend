import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'}) // así, provided root o voy a app.module.ts 
//y pongo providers: [EmpleadoService]
export class EmpleadoService {

// built http requests que ya trae angular common/http

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // endpoint call - recordar [] es array
  public getEmpleados(): Observable<Empleado[]> { // después vamos a crear una interfaz especifica
    return this.http.get<Empleado[]>(`${this.apiServerUrl}/empleados`);
  }

  public getEmpleado(empleadoId : number): Observable<Empleado> { // este lo inventé yo así que testear más
    return this.http.get<Empleado>(`${this.apiServerUrl}/empleados/find/${empleadoId}`);
  }

  public addEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.apiServerUrl}/empleados/add`, empleado);
  }

  public updateEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.apiServerUrl}/empleados/update`, empleado);
  }

  public deleteEmpleado(empleadoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/empleados/delete/${empleadoId}`);
  }
}