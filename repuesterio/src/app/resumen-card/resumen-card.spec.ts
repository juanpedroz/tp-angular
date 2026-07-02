import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenCard } from './resumen-card';

describe('ResumenCard', () => {
  let component: ResumenCard;
  let fixture: ComponentFixture<ResumenCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumenCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
