import { TestBed } from '@angular/core/testing';

import { ProviderdashboardService } from './provider-dashboard.service';

describe('ProviderService', () => {
  let service: ProviderdashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderdashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
