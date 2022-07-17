import { TestBed } from '@angular/core/testing';

import { Svc39AverageService } from './svc39-average.service';

describe('Svc39AverageService', () => {
  let service: Svc39AverageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc39AverageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
