import { TestBed } from '@angular/core/testing';

import { Svc27STDService } from './svc27-std.service';

describe('Svc27STDService', () => {
  let service: Svc27STDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc27STDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
