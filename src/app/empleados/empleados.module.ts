import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantallaEmpleadosComponent } from './pantalla-empleados/pantalla-empleados.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PantallaEmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class EmpleadosModule { }
