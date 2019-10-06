import { TestBed } from '@angular/core/testing';

import { ServiceZeusService } from './service-zeus.service';

describe('ServiceZeusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceZeusService = TestBed.get(ServiceZeusService);
    expect(service).toBeTruthy();
  });
});
