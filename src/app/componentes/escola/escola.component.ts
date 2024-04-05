import { Component, Input, OnInit, Output } from '@angular/core';
import { EscolasService } from '../../services/escola/escolas.service';
import { Escola } from '../../types/escola';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CardEscolaComponent } from './card-escola/card-escola.component';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  standalone: true,
  styleUrls: ['./escola.component.scss'],
  imports: [CommonModule, CardEscolaComponent],
})
export class EscolaComponent implements OnInit {
  arrayDeEscolas: Escola[] = [];

  constructor(private escolasService: EscolasService) {}

  ngOnInit(): void {
    this.carregarEscolas();
  }

  carregarEscolas(): void {
    this.escolasService.obterTodasAsEscolas().subscribe((escolas) => {
      this.arrayDeEscolas = escolas;
    });
  }
}
