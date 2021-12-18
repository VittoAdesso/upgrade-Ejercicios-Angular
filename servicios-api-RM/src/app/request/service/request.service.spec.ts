import { TestBed } from '@angular/core/testing';

import { requestExampleService } from './request.service';

describe('RequestService', () => {
  let service: requestExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
