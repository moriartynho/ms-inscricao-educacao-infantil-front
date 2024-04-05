import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment';
import { Escola } from '../../types/escola';

@Injectable({
  providedIn: 'root',
})
export class EscolasService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obterTodasAsEscolas(): Observable<Escola[]> {
    const url = `${this.apiUrl}/schools`;
    return this.http.get<Escola[]>(url);
  }
}
