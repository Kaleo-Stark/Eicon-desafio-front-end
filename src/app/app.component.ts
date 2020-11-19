import { Component} from '@angular/core';
import { PesquisaFilmeService } from './servicos/pesquisa-filme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public apiImagem: String = "//image.tmdb.org/t/p/w220_and_h330_face";
  
  public textoFilmeProcurado: String = "";
  
  public sugestaoDeFilme = [];

  constructor(private servicoPesquisa : PesquisaFilmeService){}

  pesquisarFilme(filmeProcurado){
    if(filmeProcurado){
      this.servicoPesquisa.pesquisarFilme(filmeProcurado).then((retorno)=>{
        (retorno)? this.sugestaoDeFilme = retorno['results'] : this.sugestaoDeFilme = [] ;
      });
    }else{ this.sugestaoDeFilme = [] }
  }

  limparPesquisa(){ this.pesquisarFilme(this.textoFilmeProcurado = '') }
}