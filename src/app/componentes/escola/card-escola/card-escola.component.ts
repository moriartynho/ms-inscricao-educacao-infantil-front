import { Component, Input, Output, input } from '@angular/core';
import { Escola } from '../../../types/escola';

@Component({
  selector: 'app-card-escola',
  standalone: true,
  imports: [],
  templateUrl: './card-escola.component.html',
  styleUrl: './card-escola.component.scss',
})
export class CardEscolaComponent {
  @Input() escola: Escola = {} as Escola;
  constructor() {}
}
