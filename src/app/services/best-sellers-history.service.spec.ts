import { TestBed } from '@angular/core/testing';

import { BestSellersHistoryService } from './best-sellers-history.service';

describe('BestSellersHistoryService', () => {
  let service: BestSellersHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestSellersHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
