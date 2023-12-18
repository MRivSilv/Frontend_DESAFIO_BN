import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css'],
})
export class ListaEventosComponent implements OnInit {
  events!: any[];

  constructor(private router:Router, private eventService: EventService) {}

  ngOnInit() {
    this.cargarEventos();
  }

  confirmarBorrarEvento(eventoId: number): void {
    const confirmacion = confirm('¿Estás seguro de que deseas borrar este evento?');

    if (confirmacion) {
      this.borrarEvento(eventoId);
    }
  }

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

  cargarEventos(): void {
    this.eventService.getEvents().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

}
