import { CommonModule, DatePipe, formatDate } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Aluno } from '../../types/aluno';
import { AlunoService } from '../../services/aluno/aluno.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  private formBuilderService = inject(NonNullableFormBuilder);

  protected form = this.formBuilderService.group({
    studentsFullName: ['', Validators.required],
    studentsBirthDate: ['', Validators.required],
    studentsCpf: ['', Validators.required],
    studentsGender: ['-', Validators.required],
    studentsGuardianName: ['', Validators.required],
    studentsGuardianCPF: ['', Validators.required],
    studentsAndress: ['', Validators.required],
    participatesAuxilioBrasil: [false, Validators.required],
  });

  constructor(private alunoService: AlunoService, private datePipe: DatePipe) {}

  onSubmit() {
    const dataFormatada = this.datePipe.transform(
      this.form.value.studentsBirthDate!,
      'dd/MM/yyyy'
    );
    const novoAluno = new Aluno(
      this.form.value.studentsFullName!,
      dataFormatada!.toString(),
      this.form.value.studentsCpf!,
      this.form.value.studentsGender!,
      this.form.value.studentsGuardianName!,
      this.form.value.studentsGuardianCPF!,
      this.form.value.studentsAndress!,
      this.verificaSeParticipaDoAuxilioBrasil()
    );
    console.log(novoAluno);
    this.alunoService.cadastrarAluno(novoAluno).subscribe((resultado) => {
      console.log(resultado);
    });
  }

  private verificaSeParticipaDoAuxilioBrasil(): boolean {
    return this.form.value.participatesAuxilioBrasil!;
  }
}
