import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReT } from './re-t';

describe('ReT', () => {
  let component: ReT;
  let fixture: ComponentFixture<ReT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReT]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
