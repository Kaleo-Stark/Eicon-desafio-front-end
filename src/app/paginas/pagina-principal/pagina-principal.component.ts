import { Component, OnInit } from '@angular/core';
import { FilmesPaginaPrincipalService } from '../../servicos/filmes-pagina-principal.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  public filmesPopulares = [];
  public filmesEmCartaz = [];
  public proximosLancamentos = [];

  constructor(private servicoFilmes : FilmesPaginaPrincipalService) {
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
      }
    });
  }

  ngOnInit(): void { }

}
