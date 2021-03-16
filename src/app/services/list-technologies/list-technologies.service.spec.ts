import { TestBed } from '@angular/core/testing';

import { ListTechnologiesService } from './list-technologies.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListTechnologiesService', () => {
  let service: ListTechnologiesService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ListTechnologiesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of technologies', (done: DoneFn) => {
    service.getListTechnologies().then((techs) => {
      expect(techs).not.toBe(null);
      done();
    }).catch((err) => {
      expect(err).toBeTruthy();
      done();
    });
  });
});
