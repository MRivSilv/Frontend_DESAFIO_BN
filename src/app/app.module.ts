import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { AgregarEventoComponent } from './agregar-evento/agregar-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEventosComponent,
    AgregarEventoComponent,
    EditarEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
