import { TestBed } from '@angular/core/testing';

import { ResisterService } from './resister.service';

describe('ResisterService', () => {
  let service: ResisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
