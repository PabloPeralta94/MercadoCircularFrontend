import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './landing/main.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { PantallaEmpleadosComponent } from './empleados/pantalla-empleados/pantalla-empleados.component';
import { ProdGuardService as guard } from './guards/emp-guard.service';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'empleado', component: PantallaEmpleadosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
