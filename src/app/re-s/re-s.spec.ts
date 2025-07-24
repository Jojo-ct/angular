import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReS } from './re-s';

describe('ReS', () => {
  let component: ReS;
  let fixture: ComponentFixture<ReS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
