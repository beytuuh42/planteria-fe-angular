import { TestBed } from '@angular/core/testing';

import { BaseCrudService } from './base.service';

describe('BaseService', () => {
  let service: BaseCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
