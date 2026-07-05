import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRepuesterio } from './home-repuesterio';

describe('HomeRepuesterio', () => {
  let component: HomeRepuesterio;
  let fixture: ComponentFixture<HomeRepuesterio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRepuesterio],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeRepuesterio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
