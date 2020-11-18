import { TestBed } from '@angular/core/testing';

import { PesquisaFilmeService } from './pesquisa-filme.service';

describe('PesquisaFilmeService', () => {
  let service: PesquisaFilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquisaFilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
