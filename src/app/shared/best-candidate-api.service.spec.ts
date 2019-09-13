import { TestBed } from '@angular/core/testing';

import { BestCandidateApiService } from './best-candidate-api.service';

describe('BestCandidateApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestCandidateApiService = TestBed.get(BestCandidateApiService);
    expect(service).toBeTruthy();
  });
});
