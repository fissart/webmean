import { TestBed } from '@angular/core/testing';

import { Svc32CRONOGRAMAService } from './svc32-cronograma.service';

describe('Svc32CRONOGRAMAService', () => {
  let service: Svc32CRONOGRAMAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc32CRONOGRAMAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
