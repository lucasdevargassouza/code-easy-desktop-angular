import { TestBed } from '@angular/core/testing';

import { CONSTS } from './consts.service';

describe('CONSTSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CONSTS = TestBed.get(CONSTS);
    expect(service).toBeTruthy();
  });
});
