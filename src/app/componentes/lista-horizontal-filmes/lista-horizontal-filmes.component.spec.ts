import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHorizontalFilmesComponent } from './lista-horizontal-filmes.component';

describe('ListaHorizontalFilmesComponent', () => {
  let component: ListaHorizontalFilmesComponent;
  let fixture: ComponentFixture<ListaHorizontalFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHorizontalFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHorizontalFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
