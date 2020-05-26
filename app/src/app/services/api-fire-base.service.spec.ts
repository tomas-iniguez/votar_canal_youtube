import { TestBed } from '@angular/core/testing';

import { ApiFireBaseService } from './api-fire-base.service';

describe('ApiFireBaseService', () => {
  let service: ApiFireBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFireBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
