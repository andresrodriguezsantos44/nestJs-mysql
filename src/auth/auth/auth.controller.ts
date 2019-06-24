import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Usuario } from '../../usuario/usuario.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly  authService: AuthService) {
  }

  @Post('login')
  async login(@Body() user: Usuario): Promise<any> {
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() user: Usuario): Promise<any> {
    return this.authService.register(user);
  }
}
