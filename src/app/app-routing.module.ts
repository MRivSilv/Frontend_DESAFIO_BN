import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { AgregarEventoComponent } from './agregar-evento/agregar-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';

const routes: Routes = [
  { path: '', redirectTo: '/eventos', pathMatch: 'full' },
  { path: 'eventos', component: ListaEventosComponent },
  { path: 'agregar-eventos', component: AgregarEventoComponent},
  { path: 'editar-evento/:id', component: EditarEventoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
