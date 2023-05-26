import { TestBed } from '@angular/core/testing';

import { MonPremierService } from './mon-premier-service.service';

describe('MonPremierServiceService', () => {
  let service: MonPremierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonPremierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
