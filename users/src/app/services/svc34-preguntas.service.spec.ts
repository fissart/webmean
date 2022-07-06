import { TestBed } from '@angular/core/testing';

import { Svc34PREGUNTASService } from './svc34-preguntas.service';

describe('Svc34PREGUNTASService', () => {
  let service: Svc34PREGUNTASService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc34PREGUNTASService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
