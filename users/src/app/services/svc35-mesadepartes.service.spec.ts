import { TestBed } from '@angular/core/testing';

import { Svc35MESADEPARTESService } from './svc35-mesadepartes.service';

describe('Svc35MESADEPARTESService', () => {
  let service: Svc35MESADEPARTESService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc35MESADEPARTESService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
