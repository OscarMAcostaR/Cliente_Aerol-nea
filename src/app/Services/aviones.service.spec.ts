import { TestBed } from '@angular/core/testing';

import { AvionesService } from './aviones.service';

describe('AvionesService', () => {
  let service: AvionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
