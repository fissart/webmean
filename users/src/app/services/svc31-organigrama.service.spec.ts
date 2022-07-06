import { TestBed } from '@angular/core/testing';

import { Svc31ORGANIGRAMAService } from './svc31-organigrama.service';

describe('Svc31ORGANIGRAMAService', () => {
  let service: Svc31ORGANIGRAMAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc31ORGANIGRAMAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
