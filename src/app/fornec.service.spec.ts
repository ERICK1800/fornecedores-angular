import { TestBed } from '@angular/core/testing';

import { FornecService } from './fornec.service';

describe('FornecService', () => {
  let service: FornecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FornecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
