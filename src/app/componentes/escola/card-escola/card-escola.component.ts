import { Component, Input, Output, input } from '@angular/core';
import { Escola } from '../../../types/escola';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-escola',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-escola.component.html',
  styleUrl: './card-escola.component.scss',
})
export class CardEscolaComponent {
  @Input() escola: Escola = {} as Escola;

  isUserAdmin: boolean = true;

  constructor() {}

  teste(escola: Escola){
    console.log(escola)
  }
}
