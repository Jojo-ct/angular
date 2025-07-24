import { TestBed } from '@angular/core/testing';

import { SciencesQuestions } from './sciences-questions';

describe('SciencesQuestions', () => {
  let service: SciencesQuestions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SciencesQuestions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
