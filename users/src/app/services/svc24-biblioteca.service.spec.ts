import { TestBed } from '@angular/core/testing';

import { Svc24BIBLIOTECAService } from './svc24-biblioteca.service';

describe('Svc24BIBLIOTECAService', () => {
  let service: Svc24BIBLIOTECAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc24BIBLIOTECAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
