import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { environment } from '../../enviroment';
import { Aluno } from '../../types/aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obterAlunoPorCPF(cpfDoAluno: string): Observable<Aluno> {
    const url = `${this.apiURL}/students/{cpf}?cpf=${cpfDoAluno}`;
    return this.http.get<Aluno>(url);
  }

  cadastrarAluno(aluno: Aluno): Observable<any> {
    const url = `${this.apiURL}/students`;
    return this.http.post(url, aluno);
  }
}
