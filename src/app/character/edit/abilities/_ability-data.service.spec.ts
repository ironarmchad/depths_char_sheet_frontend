import { TestBed } from '@angular/core/testing';

import { _abilityDataService } from './-ability-data.service';

describe('AbilityDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: _abilityDataService = TestBed.get(_abilityDataService);
    expect(service).toBeTruthy();
  });
});
