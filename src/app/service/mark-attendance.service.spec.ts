import { TestBed } from '@angular/core/testing';

import { MarkAttendanceService } from './mark-attendance.service';

describe('MarkAttendanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkAttendanceService = TestBed.get(MarkAttendanceService);
    expect(service).toBeTruthy();
  });
});
