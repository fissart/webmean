import { TestBed } from '@angular/core/testing';

import { Svc37SILABOSService } from './svc37-silabos.service';

describe('Svc37SILABOSService', () => {
  let service: Svc37SILABOSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc37SILABOSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
