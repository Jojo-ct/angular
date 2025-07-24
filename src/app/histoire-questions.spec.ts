import { TestBed } from '@angular/core/testing';

import { HistoiresQuestions } from './histoire-questions';

describe('HistoireQuestions', () => {
  let service: HistoiresQuestions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoiresQuestions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
