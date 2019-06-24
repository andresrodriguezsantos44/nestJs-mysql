import { Module } from '@nestjs/common';
import { UtilidadesService } from './utilidades.service';

@Module({
  providers: [UtilidadesService],
})
export class UtilidadesModule {
}
