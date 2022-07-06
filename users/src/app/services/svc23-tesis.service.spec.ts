import { TestBed } from '@angular/core/testing';

import { Svc23TESISService } from './svc23-tesis.service';

describe('Svc23TESISService', () => {
  let service: Svc23TESISService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc23TESISService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
