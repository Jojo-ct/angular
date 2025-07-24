import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReH } from './re-h';

describe('ReH', () => {
  let component: ReH;
  let fixture: ComponentFixture<ReH>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReH]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReH);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
