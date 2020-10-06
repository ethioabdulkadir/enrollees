import { TestBed } from '@angular/core/testing';

import { EnroleeService } from './enrolee.service';

describe('EnroleeService', () => {
  let service: EnroleeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnroleeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
