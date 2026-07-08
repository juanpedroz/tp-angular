import { TestBed } from '@angular/core/testing';

import { RepuestosData } from './repuestos-data';

describe('RepuestosData', () => {
  let service: RepuestosData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepuestosData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
