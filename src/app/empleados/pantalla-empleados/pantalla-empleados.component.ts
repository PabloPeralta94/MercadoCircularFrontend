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
    ){}

  ngOnInit() { // al iniciarse llama getEmpleados
    this.getEmpleados();
    this.isAdmin = this.tokenService.isAdmin();
  }

  public getEmpleados(): void {
    // es un observable, va a tomar su tiempo, asi que usamos subscribe
    // para ser notificados para cuando alguna data es devuelta por el servidor, la data, error, etc
    this.empleadoService.getEmpleados().subscribe(
      (response: Empleado[]) => { // si obtengo una respuesta de array de empleados
        this.empleados = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message); // access the error object
      }
    );
  }

  // modales para los otros endpoints
  public onOpenModal(empleado?: Empleado, mode?: string): void {
    const container = document.getElementById('main-container'); // obtengo el main container
    const button = document.createElement('button'); 
    
    button.type = 'button';
    button.style.display = 'none'; // CSS para esconder el botón
    button.setAttribute('data-toggle', 'modal'); // agregando atributo programáticamente

    if(mode === 'add') {
      button.setAttribute('data-target', '#addEmpleadoModal'); // id del modal
    }
    if(mode === 'edit') {
      if (empleado) { // así se chequea un no null?
        this.editarEmpleado = empleado;
      }
      button.setAttribute('data-target', '#updateEmpleadoModal'); // id del modal
    }
    if(mode === 'delete') {
      if (empleado) { // así se chequea un no null?
        this.borrarEmpleado = empleado;
      }
      button.setAttribute('data-target', '#deleteEmpleadoModal'); // id del modal
    }

    container?.appendChild(button); // le agrego el botón
    button.click(); // lo clickeo desde el código

  }

  // NgForm es el tipo, void lo que devuelve
  public onAddEmpleado(addForm: NgForm): void {
    
    document.getElementById('add-empleado-form')?.click();
    
    // una representación en JSON le envia
    this.empleadoService.addEmpleado(addForm.value).subscribe(
      // si obtenemos una respuesta "Empleado"
      (response: Empleado) => {
        console.log(response);
        // vuelvo a llamar al get empleados
        this.getEmpleados();
        addForm.reset(); // reseteo el addForm para que quede vacio
      },
      (error: HttpErrorResponse) => {
        // mejor resolver errores con una notificación
        alert(error.message);
        addForm.reset(); // lo cierro aunque no sea success
      }
    )
  }

  public onUpdateEmpleado(empleado: Empleado): void {
    
    // una representación en JSON le envia
    this.empleadoService.updateEmpleado(empleado).subscribe(
      // si obtenemos una respuesta "Empleado"
      (response: Empleado) => {
        console.log(response);
        // vuelvo a llamar al get empleados
        this.getEmpleados();
      },
      (error: HttpErrorResponse) => {
        // mejor resolver errores con una notificación
        alert(error.message);
      }
    )
  }

  public onDeleteEmpleado(empleadoId: number): void {

    this.empleadoService.deleteEmpleado(empleadoId).subscribe(
      // para el caso delete es void
      (response: void) => {
        console.log(response);
        // vuelvo a llamar al get empleados
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

    const resultados: Empleado [] = [];

    // empleados esta declarado arriba del get
    for (const empleado of this.empleados) {
      if (empleado.nombre.toLowerCase().indexOf(key.toLowerCase()) != -1
        || empleado.apellido.toLowerCase().indexOf(key.toLowerCase()) != -1
        || empleado.email.toLowerCase().indexOf(key.toLowerCase()) != -1) { // si es -1 no lo encontró

        resultados.push(empleado);
      }
    }

    this.empleados = resultados;
    if (resultados.length === 0 || !key) { // !key se fija si null?
      this.getEmpleados();
    } 

  }
}