import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-resultado-consulta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-resultado-consulta.component.html',
  styleUrl: './modal-resultado-consulta.component.scss'
})
export class ModalResultadoConsultaComponent {
  mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
  }

}
