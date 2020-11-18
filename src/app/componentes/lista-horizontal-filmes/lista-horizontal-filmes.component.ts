import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-horizontal-filmes',
  templateUrl: './lista-horizontal-filmes.component.html',
  styleUrls: ['./lista-horizontal-filmes.component.css']
})
export class ListaHorizontalFilmesComponent implements OnInit {

  @Input() titulo: String = '';
  @Input() listaFilmes = [];

  constructor() {}

  ngOnInit(): void { }
}
