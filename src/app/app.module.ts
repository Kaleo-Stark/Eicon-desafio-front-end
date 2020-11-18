import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFilmeComponent } from './componentes/card-filme/card-filme.component';
import { ListaHorizontalFilmesComponent } from './componentes/lista-horizontal-filmes/lista-horizontal-filmes.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { DetalhesFilmeComponent } from './paginas/detalhes-filme/detalhes-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    CardFilmeComponent,
    ListaHorizontalFilmesComponent,
    PaginaPrincipalComponent,
    DetalhesFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
