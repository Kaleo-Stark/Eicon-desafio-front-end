import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FilmesPaginaPrincipalService {

  public headers = { "Content-Type":"application/json; charset=UTF-8" }

  constructor(private http: HttpClient) { 
    //this.headers = this.headers.set("Content-Type","application/json; charset=UTF-8");
  }

  filmesPopulares = async () => {
    try{
      return await this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&language=pt-BR&page=1`, {headers: this.headers})
      .toPromise();
    }catch(error){
      console.log(error);
    }
  }
}
