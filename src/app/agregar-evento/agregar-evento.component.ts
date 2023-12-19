import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css'],
})
export class AgregarEventoComponent {
  nuevoEvento: any = {}; // Objeto para almacenar los datos del nuevo evento

  constructor(private eventService: EventService, private router: Router) {}

  agregarEvento() {
    //Se hace uso del servicio evento para hacer el post
    this.eventService.agregarEvento(this.nuevoEvento).subscribe(
      () => {
        console.log('Evento agregado exitosamente');
        // Redirigir a la lista de eventos después de agregar
        this.router.navigate(['/eventos']);
      },
      (error) => {
        console.error('Error al agregar el evento:', error);
      }
    );
  }
}