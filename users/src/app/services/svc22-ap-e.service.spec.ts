import { TestBed } from '@angular/core/testing';

import { Svc22APEService } from './svc22-ap-e.service';

describe('Svc22APEService', () => {
  let service: Svc22APEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc22APEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
