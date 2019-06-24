import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bCrypt from 'bcrypt';

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('int', {
    nullable: false,
    name: 'rol_id',
  })
  rolId: number;

  @Column('int', {
    nullable: true,
    name: 'plan_id',
  })
  planId: number | null;

  @Column('int', {
    nullable: false,
    name: 'pais_id',
  })
  paisId: number;

  @Column('varchar', {
    nullable: false,
    length: 45,
    name: 'nombre',
  })
  nombre: string;

  @Column('varchar', {
    nullable: false,
    length: 45,
    name: 'apellido',
  })
  apellido: string;

  @Column('varchar', {
    nullable: false,
    length: 45,
    name: 'email',
  })
  email: string;

  @Column('varchar', {
    nullable: false,
    length: 45,
    name: 'celular',
  })
  celular: string;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    default: () => '0',
    name: 'segundo_factor',
  })
  segundoFactor: boolean;

  @Column('tinyint', {
    nullable: false,
    default: () => '0',
    name: 'verificado',
  })
  verificado: number;

  @Column('int', {
    nullable: false,
    default: () => '1',
    name: 'estado',
  })
  estado: number;

  @Column('varchar', {
    nullable: false,
    length: 45,
    name: 'url_avatar',
  })
  urlAvatar: string;

  @BeforeInsert()
  hashPassword() {
    this.password = bCrypt.hashSync(this.password, bCrypt.genSaltSync(10), null);
  }

  @Column('varchar', {
    nullable: false,
    length: 100,
    name: 'password',
  })
  password: string;

  @Column('varchar', {
    nullable: false,
    length: 100,
    name: 'auth_key',
  })
  authKey: string;

  @Column('varchar', {
    nullable: false,
    length: 100,
    name: 'access_token',
  })
  accessToken: string;

  @Column('varchar', {
    nullable: false,
    length: 100,
    name: 'password_reset_token',
  })
  passwordResetToken: string;

  @Column('int', {
    nullable: false,
    name: 'password_reset_code',
  })
  passwordResetCode: number;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'createdAt',
  })
  createdAt: Date;

  @Column('timestamp', {
    nullable: false,
    default: () => '0000-00-00 00:00:00',
    name: 'updatedAt',
  })
  updatedAt: Date;

}
