import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../../usuario/usuario/usuario.service';
import { Usuario } from '../../usuario/usuario.entity';
import { CodeErrors } from '../../config/codeErrors';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {
  }

  private async validate(userData: Usuario): Promise<Usuario> {
    return await this.usuarioService.findByEmailAndPass(userData.email, userData.password);
  }

  public async login(user: Usuario): Promise<any | { status: number }> {
    return this.validate(user).then(async (userData) => {
      if (!userData) {
        return { status: 404, data: CodeErrors.inicioSesionError };
      }
      const payload = `${userData.nombre}${userData.id}`;
      const accessToken = this.jwtService.sign({
        data: payload,
      });
      return {
        access_token: accessToken,
        status: 200,
      };

    });
  }

  public async register(user: Usuario): Promise<any> {
    const isExist = await this.usuarioService.findByEmail(user.email);
    if (isExist == null) {
      return this.usuarioService.create(user);
    } else {
      return {
        status: 500,
        data: CodeErrors.emailRegistrado,
      };
    }
  }
}
