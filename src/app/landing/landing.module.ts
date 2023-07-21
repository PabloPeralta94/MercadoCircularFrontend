import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogueoComponent } from './logueo/logueo.component';
import { RegistroComponent } from './registro/registro.component';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    LogueoComponent,
    RegistroComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
