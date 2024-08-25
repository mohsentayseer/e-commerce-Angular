import { TestBed } from '@angular/core/testing';

import { QunatityService } from './qunatity.service';

describe('QunatityService', () => {
  let service: QunatityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QunatityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
