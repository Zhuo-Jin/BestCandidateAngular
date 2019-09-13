import { TestBed } from '@angular/core/testing';

import { JobAdderApiService } from './job-adder-api.service';

describe('JobAdderApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobAdderApiService = TestBed.get(JobAdderApiService);
    expect(service).toBeTruthy();
  });
});
