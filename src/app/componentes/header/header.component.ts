import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  opcoesHeader = [
    {
      opcaoId: 'pagina-inicial',
      opcaoTitulo: 'Página Inicial',
    },
    {
      opcaoId: 'cadastro',
      opcaoTitulo: 'Cadastro',
    },
    {
      opcaoId: 'escolas',
      opcaoTitulo: 'Escolas',
    },
  ];
  constructor(private router: Router) {}

  headerGoTo(caminhoDaOpcaodoHeader: String) {
    caminhoDaOpcaodoHeader;
    this.router.navigate([`${caminhoDaOpcaodoHeader}`]);
  }
}
