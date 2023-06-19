import { TestBed } from '@angular/core/testing';

import { VisitGuard } from './visit.guard';

describe('VisitGuard', () => {
  let guard: VisitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VisitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
