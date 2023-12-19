import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css'],
})
export class ListaEventosComponent implements OnInit {
  // Variable para almacenar la lista de eventos
  events!: any[];

  // Constructor del componente con inyección de dependencias de Router y EventService
  constructor(private router: Router, private eventService: EventService) {}

  // Método ejecutado al inicializar el componente
  ngOnInit() {
    // Carga la lista de eventos al iniciar el componente
    this.cargarEventos();
  }

  // Método para confirmar el borrado de un evento
  confirmarBorrarEvento(eventoId: number): void {
    // Muestra un cuadro de confirmación antes de borrar el evento
    const confirmacion = confirm('¿Estás seguro de que deseas borrar este evento?');

    if (confirmacion) {
      // Si el usuario confirma, procede con el borrado del evento
      this.borrarEvento(eventoId);
    }
  }

  // Método para borrar un evento
  borrarEvento(eventoId: number): void {
    this.eventService.borrarEvento(eventoId).subscribe(
      () => {
        console.log('Evento borrado exitosamente');
        // Vuelve a cargar la lista de eventos después de borrar
        this.cargarEventos();
      },
      (error) => {
        console.error('Error al borrar el evento:', error);
      }
    );
  }

  // Método para cargar la lista de eventos desde la API
  cargarEventos(): void {
    this.eventService.getEvents().subscribe(
      (data) => {
        // Asigna los eventos obtenidos a la variable 'events'
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
}
