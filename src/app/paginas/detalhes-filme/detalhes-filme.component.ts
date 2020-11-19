import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalhesFilmeService } from '../../servicos/detalhes-filme.service'; 

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css']
})
export class DetalhesFilmeComponent implements OnInit {

  public idFilme;

  public apiImagem = "//image.tmdb.org/t/p/w220_and_h330_face";
  
  public detalhesFilme = {
    poster_path: '',
    original_title: '',
    title: '',
    overview: '',
    release_date: '',
    genres: ''
  };

  public filmesRecomendados = [];

  public elenco = [];

  constructor(private activatedRoute: ActivatedRoute, private detalhesFilmeApi: DetalhesFilmeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametros)=>{
      this.buscarDetalhesFilme(parametros.idFilme);
    });
  }

  buscarDetalhesFilme(idFilme){
    this.detalhesFilmeApi.geral(idFilme).then((retorno:any)=>{
      this.detalhesFilme = retorno;
    });

    this.detalhesFilmeApi.recomendacoes(idFilme).then((retorno:any)=>{
      this.filmesRecomendados = retorno['results'];
    });

    this.detalhesFilmeApi.elenco(idFilme).then((retorno:any)=>{
      this.elenco = retorno['cast'];
    });
  }
}
