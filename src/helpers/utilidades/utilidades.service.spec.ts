import { Test, TestingModule } from '@nestjs/testing';
import { UtilidadesService } from './utilidades.service';

describe('UtilidadesService', () => {
  let service: UtilidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilidadesService],
    }).compile();

    service = module.get<UtilidadesService>(UtilidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
