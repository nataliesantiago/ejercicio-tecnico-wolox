import { TestBed } from '@angular/core/testing';

import { ListTechnologiesService } from './list-technologies.service';

describe('ListTechnologiesService', () => {
  let service: ListTechnologiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTechnologiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
