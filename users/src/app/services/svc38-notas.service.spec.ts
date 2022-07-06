import { TestBed } from '@angular/core/testing';

import { Svc38NOTASService } from './svc38-notas.service';

describe('Svc38NOTASService', () => {
  let service: Svc38NOTASService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc38NOTASService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
