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
    servicoFilmes.filmesPopulares().then((retorno)=>{
      if(retorno['results'].length > 0){
        this.filmesPopulares = retorno['results'];
      }
    })
  }


  public filmesPopulares = [];
  public filmesNovos = [{},{},{},{},{}]

}
