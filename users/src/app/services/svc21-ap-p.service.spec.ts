import { TestBed } from '@angular/core/testing';

import { Svc21APPService } from './svc21-ap-p.service';

describe('Svc21APPService', () => {
  let service: Svc21APPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc21APPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
