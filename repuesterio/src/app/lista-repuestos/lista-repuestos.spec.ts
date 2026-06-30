import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRepuestos } from './lista-repuestos';

describe('ListaRepuestos', () => {
  let component: ListaRepuestos;
  let fixture: ComponentFixture<ListaRepuestos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaRepuestos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaRepuestos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
