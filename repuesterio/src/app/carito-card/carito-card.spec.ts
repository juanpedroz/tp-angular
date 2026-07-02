import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaritoCard } from './carito-card';

describe('CaritoCard', () => {
  let component: CaritoCard;
  let fixture: ComponentFixture<CaritoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaritoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CaritoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
