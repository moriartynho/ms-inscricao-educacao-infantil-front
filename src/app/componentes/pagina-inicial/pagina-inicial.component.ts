import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunoService } from '../../services/aluno/aluno.service';
import { Aluno } from '../../types/aluno';
import { map } from 'rxjs';
import { ModalResultadoConsultaComponent } from '../modal-resultado-consulta/modal-resultado-consulta.component';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.scss',
  imports: [
    RouterModule,
    ModalResultadoConsultaComponent,
    ModalResultadoConsultaComponent,
  ],
})
export class PaginaInicialComponent {
  resultadoAluno: any;
  constructor(private alunoService: AlunoService) {}

  consultaPorCpf(): void {
    const cpfParaConsulta = document.getElementById(
      'cpfInput'
    ) as HTMLInputElement;

    this.alunoService
      .obterAlunoPorCPF(cpfParaConsulta.value)
      .subscribe((aluno) => {
        this.imprimirResultadoAluno(aluno);
      });
  }
  imprimirResultadoAluno(aluno: Aluno): void {
    if (!!aluno) {
      this.resultadoAluno = `<h1 class="modal_titulo">Dados de cadastro</h1>
      <h2>Aluno: ${aluno._studentsFullName} (${aluno._studentsCpf})</h2>
      <h2>Data de Nascimento: ${aluno._studentsBirthDate} (${
        aluno._studentGrade.gradeName
      })</h2>
      <h2>Sexo: ${aluno._studentsGender}</h2>
      <h2>Responsável: ${aluno._studentsGuardianName}</h2>
      <h2>Endereço: ${aluno._studentsAddress}</h2>
      <h2>Estado de Atendimento: ${aluno._studentServiceStatus.replace(
        '_',
        ' '
      )}</h2>
      `;
    } else {
      this.resultadoAluno = `<h1>Aluno não encontrado. Realize o cadastro.</h1>`;
    }
  }
}
