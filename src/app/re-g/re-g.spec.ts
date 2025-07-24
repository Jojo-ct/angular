import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReG } from './re-g';

describe('ReG', () => {
  let component: ReG;
  let fixture: ComponentFixture<ReG>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReG]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReG);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
