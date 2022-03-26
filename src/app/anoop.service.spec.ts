import { TestBed } from '@angular/core/testing';

import { AnoopService } from './anoop.service';

describe('AnoopService', () => {
  let service: AnoopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnoopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
