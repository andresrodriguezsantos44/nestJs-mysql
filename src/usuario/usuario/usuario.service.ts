import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../usuario.entity';
import * as bCrypt from 'bcrypt';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UtilidadesService } from '../../helpers/utilidades/utilidades.service';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private userRepository: Repository<Usuario>,
    private readonly utilidadesService: UtilidadesService,
  ) {
  }

  async findByEmailAndPass(email: string, password: string): Promise<Usuario> {
    const isExist = await this.userRepository.findOne({
      where: { email },
    });
    if (isExist != null) {
      if (bCrypt.compareSync(String(password), String(isExist.password))) {
        return isExist;
      } else {
        return null;
      }
    }
  }

  async findById(id: number): Promise<Usuario> {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<Usuario> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async create(user: Usuario): Promise<Usuario> {
    user.password = bCrypt.hashSync(user.password, bCrypt.genSaltSync(10), null);
    user.accessToken = this.utilidadesService.generarRandomString();
    user.passwordResetCode = this.utilidadesService.generarRandomInt();
    user.passwordResetToken = this.utilidadesService.generarRandomString();
    user.authKey = this.utilidadesService.generarRandomString();
    return await this.userRepository.save(user);
  }

  async all(): Promise<Usuario[]> {
    return await this.userRepository.find();
  }

  async update(usuario: Usuario): Promise<UpdateResult> {
    return await this.userRepository.update(usuario.id, usuario);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }

  async view(id) {
    return await this.userRepository.findOne(id);
  }



}
