import { TestBed } from '@angular/core/testing';

import { Svc28EGRESADOSService } from './svc28-egresados.service';

describe('Svc28EGRESADOSService', () => {
  let service: Svc28EGRESADOSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc28EGRESADOSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
