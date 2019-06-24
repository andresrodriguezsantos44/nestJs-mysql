import { Injectable } from '@nestjs/common';
import * as token from 'uuid-token-generator';

const tokgen2 = new token(256, token.BASE62);

@Injectable()
export class UtilidadesService {
  generarRandomString(): string {
    return tokgen2.generate();
  }

  generarRandomInt(): number {
    const fecha = Date.now();
    // tslint:disable-next-line:radix
    return parseInt(fecha.toString().substring(7));
  }

}
