import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sciences } from './sciences';

describe('Sciences', () => {
  let component: Sciences;
  let fixture: ComponentFixture<Sciences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sciences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sciences);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
