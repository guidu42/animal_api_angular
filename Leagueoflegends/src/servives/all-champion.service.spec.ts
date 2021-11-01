import { TestBed } from '@angular/core/testing';

import { AllChampionService } from './all-champion.service';

describe('AllChampionService', () => {
  let service: AllChampionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllChampionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
