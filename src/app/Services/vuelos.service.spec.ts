import { TestBed } from '@angular/core/testing';

import  {VuelosService} from './vuelos.service';

describe('VueloService', () => {
  let service: VuelosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VuelosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
