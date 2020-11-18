import { TestBed } from '@angular/core/testing';

import { FilmesPaginaPrincipalService } from './filmes-pagina-principal.service';

describe('FilmesPaginaPrincipalService', () => {
  let service: FilmesPaginaPrincipalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmesPaginaPrincipalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
