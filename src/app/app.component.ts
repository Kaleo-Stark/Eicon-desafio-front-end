import { Component } from '@angular/core';
import { FilmesPaginaPrincipalService } from './servicos/filmes-pagina-principal.service';
import { PesquisaFilmeService } from './servicos/pesquisa-filme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public textoFilmeProcurado: String = "";

  constructor(private servicoFilmes : FilmesPaginaPrincipalService, private pesquisa : PesquisaFilmeService){
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

  pesquisarFilme(filmeProcurado){
    if(filmeProcurado){
      this.pesquisa.pesquisarFilme(filmeProcurado).then((retorno)=>{
        if(retorno){  
          this.sugestaoDeFilme = retorno['results'];
        }else {
          this.sugestaoDeFilme = [];
        }
      })
    }else {
      this.sugestaoDeFilme = [];
    }
  }

  public sugestaoDeFilme = [];

  public filmesPopulares = [];
  public filmesEmCartaz = [];
  public proximosLancamentos = [];
}
