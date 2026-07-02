import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarRepuesterio } from './side-bar-repuesterio';

describe('SideBarRepuesterio', () => {
  let component: SideBarRepuesterio;
  let fixture: ComponentFixture<SideBarRepuesterio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarRepuesterio],
    }).compileComponents();

    fixture = TestBed.createComponent(SideBarRepuesterio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
