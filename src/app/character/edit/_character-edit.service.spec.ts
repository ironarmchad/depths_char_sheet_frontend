import { TestBed } from '@angular/core/testing';

import { CharacterEditService } from './_character-edit.service';

describe('CharacterEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterEditService = TestBed.get(CharacterEditService);
    expect(service).toBeTruthy();
  });
});
