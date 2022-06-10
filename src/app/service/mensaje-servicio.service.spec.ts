import { TestBed } from '@angular/core/testing';

import { MensajeServicioService } from './mensaje-servicio.service';

describe('MensajeServicioService', () => {
  let service: MensajeServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
