import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { NgForm } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-pantalla-empleados',
  templateUrl: './pantalla-empleados.component.html',
  styleUrls: ['./pantalla-empleados.component.css']
})
export class PantallaEmpleadosComponent implements OnInit {
  public empleados: Empleado[] = [];
  public editarEmpleado: Empleado = this.getDefaultEmpleado();
  public borrarEmpleado: Empleado = this.getDefaultEmpleado();
  isAdmin = false;

  constructor(
    private empleadoService: EmpleadoService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.getEmpleados();
    this.isAdmin = this.tokenService.isAdmin();
  }

  public getEmpleados(): void {

    this.empleadoService.getEmpleados().subscribe(
      (response: Empleado[]) => {
        this.empleados = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(empleado?: Empleado, mode?: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');

    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmpleadoModal');
    }
    if (mode === 'edit') {
      if (empleado) {
        this.editarEmpleado = empleado;
      }
      button.setAttribute('data-target', '#updateEmpleadoModal');
    }
    if (mode === 'delete') {
      if (empleado) {
        this.borrarEmpleado = empleado;
      }
      button.setAttribute('data-target', '#deleteEmpleadoModal');
    }

    container?.appendChild(button);
    button.click();

  }


  public onAddEmpleado(addForm: NgForm): void {
    document.getElementById('add-empleado-form')?.click();
    this.empleadoService.addEmpleado(addForm.value).subscribe(
      (response: Empleado) => {
        console.log(response);
        this.getEmpleados();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
  }

  public onUpdateEmpleado(empleado: Empleado): void {

    this.empleadoService.updateEmpleado(empleado).subscribe(
      (response: Empleado) => {
        console.log(response);
        this.getEmpleados();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteEmpleado(empleadoId: number): void {

    this.empleadoService.deleteEmpleado(empleadoId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmpleados();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  private getDefaultEmpleado(): Empleado {
    return {
      id: 0,
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      puestoDeTrabajo: '',
      imageUrl: '',
      codigoEmpleado: '',
    };
  }

  public buscarEmpleados(key: string): void {

    console.log("busqueda keyword:" + key);

    const resultados: Empleado[] = [];

    for (const empleado of this.empleados) {
      if (empleado.nombre.toLowerCase().indexOf(key.toLowerCase()) != -1
        || empleado.apellido.toLowerCase().indexOf(key.toLowerCase()) != -1
        || empleado.email.toLowerCase().indexOf(key.toLowerCase()) != -1) {

        resultados.push(empleado);
      }
    }

    this.empleados = resultados;
    if (resultados.length === 0 || !key) {
      this.getEmpleados();
    }

  }
}