import { TestBed } from '@angular/core/testing';

import { DetalhesFilmeService } from './detalhes-filme.service';

describe('DetalhesFilmeService', () => {
  let service: DetalhesFilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalhesFilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
