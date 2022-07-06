import { TestBed } from '@angular/core/testing';

import { Svc18CONSEJOESTUDIANTILService } from './svc18-consejoestudiantil.service';

describe('Svc18CONSEJOESTUDIANTILService', () => {
  let service: Svc18CONSEJOESTUDIANTILService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc18CONSEJOESTUDIANTILService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
