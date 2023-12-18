// editar-evento.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css'],
})
export class EditarEventoComponent implements OnInit {
  evento: any = {};
  eventoId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.eventoId = +this.route.snapshot.paramMap.get('id')!;

    this.eventService.getEventoPorId(this.eventoId).subscribe(
      (data) => {
        this.evento = data;
      },
      (error) => {
        console.error('Error obteniendo detalles del evento:', error);
      }
    );
  }

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
