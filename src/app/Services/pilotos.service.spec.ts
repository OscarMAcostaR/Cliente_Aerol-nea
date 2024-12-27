import { TestBed } from '@angular/core/testing';

import { PilotosService } from './pilotos.service';

describe('PilotosService', () => {
  let service: PilotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
