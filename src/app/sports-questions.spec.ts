import { TestBed } from '@angular/core/testing';

import { SportsQuestions } from './sports-questions';

describe('SportsQuestions', () => {
  let service: SportsQuestions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsQuestions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
