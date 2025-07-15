import { Routes } from '@angular/router';
import { PaginaInicial } from './paginas/pagina-inicial/pagina-inicial';

export const routes: Routes = [
  { path: '', component: PaginaInicial },
  { path: 'pagina-inicial', component: PaginaInicial }
];
