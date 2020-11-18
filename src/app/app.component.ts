import { Component } from '@angular/core';
import { FilmesPaginaPrincipalService } from './servicos/filmes-pagina-principal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eicon-desafio-front-end';

  constructor(private servicoFilmes : FilmesPaginaPrincipalService){
    servicoFilmes.buscarListaFilmes('/popular').then((retorno)=>{
      if(retorno['results'].length > 0){
        this.filmesPopulares = retorno['results'];
      }
    });

    servicoFilmes.buscarListaFilmes('/now_playing').then((retorno)=>{
      if(retorno['results'].length > 0){
        this.filmesEmCartaz = retorno['results'];
      }
    });

    servicoFilmes.buscarListaFilmes('/upcoming').then((retorno)=>{
      if(retorno['results'].length > 0){
        this.proximosLancamentos = retorno['results'];
        console.log(retorno)
      }
    });
  }


  public filmesPopulares = [];
  public filmesEmCartaz = [];
  public proximosLancamentos = [];

}
