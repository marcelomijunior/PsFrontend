import { TestBed } from '@angular/core/testing';

import { LoadingCustomService } from './loading-custom.service';

describe('LoadingCustomService', () => {
  let service: LoadingCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
