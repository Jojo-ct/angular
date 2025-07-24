import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G } from './g';

describe('G', () => {
  let component: G;
  let fixture: ComponentFixture<G>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [G]
    })
    .compileComponents();

    fixture = TestBed.createComponent(G);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
