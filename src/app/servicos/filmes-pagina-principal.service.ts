import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FilmesPaginaPrincipalService {

  private headers = { "Content-Type":"application/json; charset=UTF-8" }

  

  constructor(private http: HttpClient) { }

  buscarListaFilmes = async (tipo:String) => {
    try{
      return await this.http.get(this.linkApi(tipo), {headers: this.headers})
      .toPromise();
    }catch(error){
      console.log(error);
    }
  }

  linkApi(tipoFilme){
    return `https://api.themoviedb.org/3/movie${tipoFilme}?api_key=${environment.apiKey}&language=pt-BR&page=1&region=BR`
  }
}
