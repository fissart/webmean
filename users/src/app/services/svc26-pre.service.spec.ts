import { TestBed } from '@angular/core/testing';

import { Svc26PREService } from './svc26-pre.service';

describe('Svc26PREService', () => {
  let service: Svc26PREService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc26PREService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
