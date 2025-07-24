import { TestBed } from '@angular/core/testing';

import { TechQuestions } from './tech-questions';

describe('TechQuestions', () => {
  let service: TechQuestions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechQuestions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
