import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FeedComponent } from './feed/feed.component';
import { AmigosComponent } from './amigos/amigos.component';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InicioComponent,
    PerfilComponent,
    FeedComponent,
    AmigosComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class MainAppModule { }
