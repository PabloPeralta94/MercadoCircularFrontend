import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FeedComponent } from './feed/feed.component';
import { AmigosComponent } from './amigos/amigos.component';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './feed/post/post.component';
import { FormsModule } from '@angular/forms';
import { CrearPostComponent } from './feed/crear-post/crear-post.component';



@NgModule({
  declarations: [
    InicioComponent,
    PerfilComponent,
    FeedComponent,
    AmigosComponent,
    ChatComponent,
    PostComponent,
    CrearPostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class MainAppModule { }
