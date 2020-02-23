import { TestBed } from '@angular/core/testing';

import { ServiceServicesService } from './service-services.service';

describe('ServiceServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceServicesService = TestBed.get(ServiceServicesService);
    expect(service).toBeTruthy();
  });
});
