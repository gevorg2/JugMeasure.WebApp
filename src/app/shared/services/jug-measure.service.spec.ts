import { TestBed, inject } from '@angular/core/testing';

import { JugMeasureService } from './jug-measure.service';

describe('JugMeasureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JugMeasureService]
    });
  });

  it('should ...', inject([JugMeasureService], (service: JugMeasureService) => {
    expect(service).toBeTruthy();
  }));
});
