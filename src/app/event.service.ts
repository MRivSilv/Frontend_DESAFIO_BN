import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  // URL base de la API de eventos
  private apiUrl = 'http://localhost:8000/events';

  // Constructor del servicio con inyección de dependencias de HttpClient
  constructor(private http: HttpClient) {}

  // Método para obtener la lista de eventos desde la API
  getEvents(): Observable<any[]> {
    const url = `${this.apiUrl}/?format=json`;
    return this.http.get<any[]>(url);
  }

  // Método para borrar un evento por su ID
  borrarEvento(eventoId: number): Observable<any> {
    const url = `${this.apiUrl}/${eventoId}/?format=json`;
    return this.http.delete(url);
  }

  // Método para agregar un nuevo evento a la API
  agregarEvento(nuevoEvento: any): Observable<any> {
    const url = `${this.apiUrl}/?format=json`
    return this.http.post(url, nuevoEvento);
  }

  // Método para editar un evento existente en la API
  editarEvento(evento: any): Observable<any> {
    const url = `${this.apiUrl}/${evento.id}/`;
    return this.http.put(url, evento);
  }

  // Método para obtener un evento por su ID desde la API
  getEventoPorId(eventoId: number): Observable<any> {
    const url = `${this.apiUrl}/${eventoId}/?format=json`;
    return this.http.get<any>(url);
  }
}
