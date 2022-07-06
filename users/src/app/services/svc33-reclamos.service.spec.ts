import { TestBed } from '@angular/core/testing';

import { Svc33RECLAMOSService } from './svc33-reclamos.service';

describe('Svc33RECLAMOSService', () => {
  let service: Svc33RECLAMOSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc33RECLAMOSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
