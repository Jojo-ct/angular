import { TestBed } from '@angular/core/testing';

import { GéographieQuestions } from './géographie-questions';

describe('GéographieQuestions', () => {
  let service: GéographieQuestions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GéographieQuestions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
