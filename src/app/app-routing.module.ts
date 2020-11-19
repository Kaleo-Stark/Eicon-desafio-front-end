import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { DetalhesFilmeComponent } from './paginas/detalhes-filme/detalhes-filme.component';

const routes: Routes = [
  { path: '', redirectTo: '/pagina-principal', pathMatch: 'full'},
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'detalhes-filme/:idFilme', component: DetalhesFilmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }