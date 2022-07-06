import { TestBed } from '@angular/core/testing';

import { Svc29EVENTOSService } from './svc29-eventos.service';

describe('Svc29EVENTOSService', () => {
  let service: Svc29EVENTOSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc29EVENTOSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
