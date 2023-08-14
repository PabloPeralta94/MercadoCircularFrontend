import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './landing/main.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { PantallaEmpleadosComponent } from './empleados/pantalla-empleados/pantalla-empleados.component';
import { ProdGuardService as guard } from './guards/emp-guard.service';
import { LoginGuard } from './guards/login.guard';
import { InicioComponent } from './main-app/inicio/inicio.component';
import { PostComponent } from './main-app/feed/post/post.component';
import { FeedComponent } from './main-app/feed/feed.component';
import { PerfilComponent } from './main-app/perfil/perfil.component';
import { MiPerfilComponent } from './main-app/perfil/mi-perfil/mi-perfil.component';
import { AmigosComponent } from './main-app/amigos/amigos.component';
import { MarketComponent } from './main-app/feed/market/market/market.component';
import { AgregarEquipoComponent } from './main-app/feed/market/agregar-equipo/agregar-equipo.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [LoginGuard] },
  { path: 'landing', component: FeedComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: 'empleado', component: PantallaEmpleadosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'perfil/:nombreUsuario', component: PerfilComponent },
  { path: 'perfil', component: MiPerfilComponent },
  { path: 'amigos', component: AmigosComponent },
  {path: 'market', component: MarketComponent},
  {path: 'agregar', component: AgregarEquipoComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
