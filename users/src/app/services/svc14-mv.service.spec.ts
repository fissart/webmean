import { TestBed } from '@angular/core/testing';

import { Svc14MVService } from './svc14-mv.service';

describe('Svc14MVService', () => {
  let service: Svc14MVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc14MVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
