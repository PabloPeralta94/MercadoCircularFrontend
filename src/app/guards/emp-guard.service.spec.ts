import { TestBed } from '@angular/core/testing';

import { EmpGuardService } from './emp-guard.service';

describe('EmpGuardService', () => {
  let service: EmpGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
