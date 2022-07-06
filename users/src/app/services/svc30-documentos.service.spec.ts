import { TestBed } from '@angular/core/testing';

import { Svc30DOCUMENTOSService } from './svc30-documentos.service';

describe('Svc30DOCUMENTOSService', () => {
  let service: Svc30DOCUMENTOSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc30DOCUMENTOSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
