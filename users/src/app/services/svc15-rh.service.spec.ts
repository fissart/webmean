import { TestBed } from '@angular/core/testing';

import { Svc15RHService } from './svc15-rh.service';

describe('Svc15RHService', () => {
  let service: Svc15RHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc15RHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
