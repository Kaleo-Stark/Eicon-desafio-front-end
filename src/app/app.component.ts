import { Component, ViewChild } from '@angular/core';
import { PesquisaFilmeService } from './servicos/pesquisa-filme.service';
import { Router } from '@angular/router';
import { DetalhesFilmeComponent } from './paginas/detalhes-filme/detalhes-filme.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(DetalhesFilmeComponent) detalhes: DetalhesFilmeComponent;

  public textoFilmeProcurado: String = "";
  public apiImagem = "//image.tmdb.org/t/p/w220_and_h330_face";

  constructor(private pesquisa : PesquisaFilmeService, private router: Router){}

  pesquisarFilme(filmeProcurado){
    if(filmeProcurado){
      this.pesquisa.pesquisarFilme(filmeProcurado).then((retorno)=>{
        if(retorno){  
          this.sugestaoDeFilme = retorno['results'];
          console.log(retorno)
        }else {
          this.sugestaoDeFilme = [];
        }
      })
    }else {
      this.sugestaoDeFilme = [];
    }
  }

  limparPesquisa(){
    this.pesquisarFilme(this.textoFilmeProcurado = '')
  }

  public sugestaoDeFilme = [];
}
