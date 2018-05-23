import { TestBed, inject } from '@angular/core/testing';

import { LeaguetableserviceService } from './leaguetableservice.service';

describe('LeaguetableserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaguetableserviceService]
    });
  });

  it('should be created', inject([LeaguetableserviceService], (service: LeaguetableserviceService) => {
    expect(service).toBeTruthy();
  }));
});
