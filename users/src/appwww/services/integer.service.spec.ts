import { TestBed } from '@angular/core/testing';

import { NgCurseService } from './ng-curse.service';

describe('NgCurseService', () => {
  let service: NgCurseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCurseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
