import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetalhesFilmeService {

  private headers = { "Content-Type":"application/json; charset=UTF-8" }

  constructor(private http: HttpClient) { }

  geral = async (idFilme) => {
    try{
      return await this.http.get(this.linkApi(idFilme), {headers: this.headers})
      .toPromise();
    }catch(error){
      console.log(error);
    }
  }

  
  recomendacoes = async (idFilme) => {
    try{
      return await this.http.get(this.linkApi(idFilme,true), {headers: this.headers})
      .toPromise();
    }catch(error){
      console.log(error);
    }
  }

  elenco = async (idFilme) => {
    try{
      return await this.http.get(`https://api.themoviedb.org/3/movie/${idFilme}}/credits?api_key=${environment.apiKey}&language=pt-BR`, {headers: this.headers})
      .toPromise();
    }catch(error){
      console.log(error);
    }
  }

  
  private linkApi(idFilme, recomendacao: Boolean = false){
    return `https://api.themoviedb.org/3/movie/${idFilme}${(recomendacao)?'/recommendations':''}?api_key=${environment.apiKey}&language=pt-BR${(recomendacao)?'&page=1':''}`;
  }
}
