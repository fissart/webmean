import { TestBed } from '@angular/core/testing';

import { Svc17ADMINISTRATIVOSService } from './svc17-administrativos.service';

describe('Svc17ADMINISTRATIVOSService', () => {
  let service: Svc17ADMINISTRATIVOSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc17ADMINISTRATIVOSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
