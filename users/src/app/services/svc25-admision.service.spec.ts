import { TestBed } from '@angular/core/testing';

import { Svc25ADMISIONService } from './svc25-admision.service';

describe('Svc25ADMISIONService', () => {
  let service: Svc25ADMISIONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc25ADMISIONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
