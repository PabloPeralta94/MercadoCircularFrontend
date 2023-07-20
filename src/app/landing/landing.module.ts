import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogueoComponent } from './logueo/logueo.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    LogueoComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
