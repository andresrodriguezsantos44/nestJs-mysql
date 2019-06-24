import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UtilidadesModule } from './helpers/utilidades/utilidades.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.64.2',
      port: 3306,
      username: 'test2',
      password: 'test2',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),
    AuthModule,
    UsuarioModule,
    UtilidadesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
