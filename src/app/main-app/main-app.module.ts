import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { FeedComponent } from './feed/feed.component';
import { AmigosComponent } from './amigos/amigos.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './feed/post/post.component';
import { FormsModule } from '@angular/forms';
import { CrearPostComponent } from './feed/crear-post/crear-post.component';
import { BarraLatIzqComponent } from './feed/barra-lat-izq/barra-lat-izq.component';
import { UserPostComponent } from './feed/user-post/user-post.component';
import { MiPerfilComponent } from './perfil/mi-perfil/mi-perfil.component';
import { SolicitudesComponent } from './amigos/solicitudes/solicitudes.component';
import { MarketComponent } from './feed/market/market/market.component';
import { AgregarEquipoComponent } from './feed/market/agregar-equipo/agregar-equipo.component';



@NgModule({
  declarations: [    
    PerfilComponent,
    FeedComponent,
    AmigosComponent,    
    PostComponent,
    CrearPostComponent,
    BarraLatIzqComponent,
    UserPostComponent,
    MiPerfilComponent,
    SolicitudesComponent,
    MarketComponent,
    AgregarEquipoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class MainAppModule { }
