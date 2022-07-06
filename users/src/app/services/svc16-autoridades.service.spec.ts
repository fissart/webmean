import { TestBed } from '@angular/core/testing';

import { Svc16AUTORIDADESService } from './svc16-autoridades.service';

describe('Svc16AUTORIDADESService', () => {
  let service: Svc16AUTORIDADESService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc16AUTORIDADESService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
