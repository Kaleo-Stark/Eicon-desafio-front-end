import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent implements OnInit {

  @Input() dadosFilme: {
    id: 0,
    title: '',
    release_date: '',
    poster_path: ''
  }; 

  constructor() { }

  ngOnInit(): void {
  }

  public formatarData = (data) => {
    return data;
  }

}
