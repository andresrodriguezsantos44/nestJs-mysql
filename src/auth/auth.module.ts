import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { Config } from '../config/config.js';
import { AuthController } from './auth/auth.controller';
import { UsuarioService } from '../usuario/usuario/usuario.service';
import { Usuario } from '../usuario/usuario.entity';
import { UtilidadesService } from '../helpers/utilidades/utilidades.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: JSON.stringify(Config.jwtSecretCode),
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],
  providers: [AuthService, UsuarioService, UtilidadesService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {
}
