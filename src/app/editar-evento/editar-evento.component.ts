import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css'],
})
export class EditarEventoComponent implements OnInit {
  // Objeto para almacenar los detalles del evento a editar
  evento: any = {};
  // Variable para almacenar el ID del evento
  eventoId!: number;

  // Constructor del componente con inyección de dependencias de ActivatedRoute, Router y EventService
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) {}

  // Método ejecutado al inicializar el componente
  ngOnInit(): void {
    // Obtiene el ID del evento de los parámetros de la ruta
    this.eventoId = +this.route.snapshot.paramMap.get('id')!;

    // Obtiene los detalles del evento por su ID desde la API
    this.eventService.getEventoPorId(this.eventoId).subscribe(
      (data) => {
        // Asigna los detalles del evento al objeto 'evento'
        this.evento = data;
      },
      (error) => {
        console.error('Error obteniendo detalles del evento:', error);
      }
    );
  }

  // Método para guardar los cambios realizados en el evento
  guardarCambios(): void {
    this.eventService.editarEvento(this.evento).subscribe(
      () => {
        console.log('Evento editado exitosamente');
        // Después de editar, regresa a la lista de eventos
        this.router.navigate(['/eventos']);
      },
      (error) => {
        console.error('Error al editar el evento:', error);
      }
    );
  }
}
