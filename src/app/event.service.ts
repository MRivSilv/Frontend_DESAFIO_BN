import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:8000/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any[]> {
    const url =`${this.apiUrl}/?format=json`;
    return this.http.get<any[]>(url);
  }
  borrarEvento(eventoId: number): Observable<any> {
    const url = `${this.apiUrl}/${eventoId}/?format=json`;
    return this.http.delete(url);
  }
  agregarEvento(nuevoEvento: any): Observable<any> {
    const url = `${this.apiUrl}/?format=json`
    return this.http.post(url, nuevoEvento);
  }
  editarEvento(evento: any): Observable<any> {
    const url = `${this.apiUrl}/${evento.id}/`;
    return this.http.put(url, evento)
  }
  getEventoPorId(eventoId: number): Observable<any> {
    const url = `${this.apiUrl}/${eventoId}/?format=json`;
    return this.http.get<any>(url)
  }
}
