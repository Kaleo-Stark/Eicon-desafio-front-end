import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFilmeComponent } from './componentes/card-filme/card-filme.component';
import { ListaHorizontalFilmesComponent } from './componentes/lista-horizontal-filmes/lista-horizontal-filmes.component';

@NgModule({
  declarations: [
    AppComponent,
    CardFilmeComponent,
    ListaHorizontalFilmesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
