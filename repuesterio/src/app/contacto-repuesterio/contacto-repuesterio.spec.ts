import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoRepuesterio } from './contacto-repuesterio';

describe('ContactoRepuesterio', () => {
  let component: ContactoRepuesterio;
  let fixture: ComponentFixture<ContactoRepuesterio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoRepuesterio],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoRepuesterio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
