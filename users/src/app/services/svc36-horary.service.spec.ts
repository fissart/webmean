import { TestBed } from '@angular/core/testing';

import { Svc36HORARYService } from './svc36-horary.service';

describe('Svc36HORARYService', () => {
  let service: Svc36HORARYService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc36HORARYService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
