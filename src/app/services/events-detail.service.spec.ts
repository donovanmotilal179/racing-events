import { TestBed } from '@angular/core/testing';

import { EventsDetailService } from './events-detail.service';

describe('EventsDetailService', () => {
  let service: EventsDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
