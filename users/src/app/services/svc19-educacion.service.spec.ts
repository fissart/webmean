import { TestBed } from '@angular/core/testing';

import { Svc19EDUCACIONService } from './svc19-educacion.service';

describe('Svc19EDUCACIONService', () => {
  let service: Svc19EDUCACIONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc19EDUCACIONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
