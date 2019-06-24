import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth/auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Config } from '../config/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JSON.stringify(Config.jwtSecretCode),
    });
  }

  async validate(payload: any) {
    const user = await this.authService.login(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

