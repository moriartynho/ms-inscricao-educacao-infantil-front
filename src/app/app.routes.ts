import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EscolaComponent } from './componentes/escola/escola.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';

export const routes: Routes = [
  {
    path: 'pagina-inicial',
    component: PaginaInicialComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'escolas',
    component: EscolaComponent,
  },
  {
    path: '',
    redirectTo: '/pagina-inicial',
    pathMatch: 'full',
  },
];
