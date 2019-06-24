import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../usuario.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('usuario')
export class UsuarioController {

  constructor(private usuarioService: UsuarioService) {
  }

  @Get('index')
  @UseGuards(AuthGuard('jwt'))
  getUsuarios() {
    return this.usuarioService.all();
  }

  @Get(':id/view')
  @UseGuards(AuthGuard('jwt'))
  getUsuario(@Param('id') id) {
    return this.usuarioService.view(id);
  }

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() usuario: Usuario): Promise<any> {
    return this.usuarioService.create(usuario);
  }

  @Put(':id/update')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id, @Body() usuario: Usuario): Promise<any> {
    usuario.id = Number(id);
    return this.usuarioService.update(usuario);
  }

  @Delete(':id/delete')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id): Promise<any> {
    return this.usuarioService.delete(id);
  }

}
