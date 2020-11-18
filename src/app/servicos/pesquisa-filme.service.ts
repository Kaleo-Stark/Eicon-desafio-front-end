import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PesquisaFilmeService {
  private headers = { "Content-Type":"application/json; charset=UTF-8" }

  constructor(private http: HttpClient) { }

  pesquisarFilme = async (nome:String) => {
    try{
      return await this.http.get(this.linkApi(nome), {headers: this.headers})
      .toPromise();
    }catch(error){
      console.log(error);
    }
  }

  linkApi(nome){
    return `https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}&language=pt-BR&query=${nome}&page=1&include_adult=false&region=BR`
  }
}
