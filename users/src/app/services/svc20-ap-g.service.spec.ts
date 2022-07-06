import { TestBed } from '@angular/core/testing';

import { Svc20APGService } from './svc20-ap-g.service';

describe('Svc20APGService', () => {
  let service: Svc20APGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc20APGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
