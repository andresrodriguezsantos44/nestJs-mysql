import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioController } from './usuario/usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { UtilidadesService } from '../helpers/utilidades/utilidades.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
  ],
  providers: [UsuarioService, UtilidadesService],
  controllers: [UsuarioController],
})
export class UsuarioModule {
}
